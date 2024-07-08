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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {tasks.map((task) => (
                <TaskCard 
                    task={task} 
                    key={task._id} 
                />
            ))}
        </div>
    );
}

export default TasksPage;
