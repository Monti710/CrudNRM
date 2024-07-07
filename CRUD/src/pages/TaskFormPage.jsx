import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";

function TaskFormPage() {
  const { register, handleSubmit } = useForm();

  const {createTask} = useTasks();

  const onSubmit = handleSubmit((data) => {
    createTask(data);

  });

  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center min-h-screen bg-black p-4">
      <div className="absolute inset-0 z-0">
        <img
          src="https://th.bing.com/th/id/R.cd8f8b7d2de853d60c04df753a1fe94f?rik=hKJzq3FDHEj51w&riu=http%3a%2f%2f1.bp.blogspot.com%2f-qZLgVuN1cV8%2fWMf4NE_TYiI%2fAAAAAAAAFdw%2fhd6LUMjWmqYzRLYb02T74ljJheMnqwBxgCK4B%2fs000%2ffondos-con-movimiento-16.gif&ehk=zvKcvsk0r%2fUCx09MmujtohdkRMagnPIhh9Wf5iWwmxQ%3d&risl=&pid=ImgRaw&r=0"
          className="absolute inset-0 w-full h-full object-cover blur-md opacity-110"
          alt="Background"
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="bg-white bg-opacity-80 p-8 rounded border border-white w-full max-w-md shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-black">New Task</h2>
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 text-black" htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                placeholder="Title"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                {...register("title")}
                autoFocus
              />
            </div>
            <div>
              <label className="block mb-1 text-black" htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="3"
                placeholder="Description"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                {...register("description")}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TaskFormPage;
