import React, { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";

function TasksPage() {
    const { getTasks, tasks, deleteTask } = useTasks();

    useEffect(() => {
        getTasks();
    }, []);

    if (tasks.length === 0) return (<h1 className="text-white text-center mt-10">NO TASKS</h1>);

    const handleDelete = (taskId) => {
        deleteTask(taskId);
    };

    const handleEdit = (taskId) => {
        // Redirigir al formulario de edición con el ID de la tarea
    };

    // Ordenar las tareas del más reciente al más viejo
    const sortedTasks = [...tasks].sort((a, b) => new Date(Number(b.date)) - new Date(Number(a.date)));

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {sortedTasks.map((task) => (
                <TaskCard 
                    task={task} 
                    key={task._id} 
                    onDelete={handleDelete} 
                    onEdit={handleEdit} 
                />
            ))}
        </div>
    );
}

export default TasksPage;
