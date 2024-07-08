import React, { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";

function TasksPage() {
    const { getTasks, tasks } = useTasks();

    useEffect(() => {
        getTasks();
    }, []);

    if (tasks.length === 0) return (<h1 className="text-white text-center mt-10">NO TASKS</h1>);

    return (
        <div className="relative min-h-screen">
            <img
                src="https://thumbs.dreamstime.com/b/pizarra-vectorial-plana-con-notas-al-publicar-post-nota-colorido-para-el-trabajo-de-web-y-dise%C3%B1o-185514200.jpg"
                className="absolute inset-0 w-full h-full object-cover blur-md opacity-22"
                alt="Background"
            />
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {tasks.map((task) => (
                    <TaskCard
                        task={task}
                        key={task._id}
                    />
                ))}
            </div>
        </div>
    );
}

export default TasksPage;