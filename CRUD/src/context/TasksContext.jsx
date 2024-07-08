import { createContext, useContext, useState} from "react";
import {createTasksRequest, getTasksRequest, deleteTasksRequest, getTaskRequest, updateTasksRequest} from "../api/tasks";

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);

    if(!context){
        throw new Error("useTask must be used within a TaskProvider");  // Añadir mensaje de error en caso de que no este en un Provider
    }

    return context;  // Devuelve los valores y funciones del contexto
}
export function TaskProvider({children}){
    const [tasks, setTasks] = useState([]);

    const getTasks = async() => {
        try{
            const res = await getTasksRequest();
            setTasks(res.data);  
             
        }catch(error){
            console.log(error);  // Añadir manejo de errores aquí
        }
    }


    const createTask = async (task) => {
        await createTasksRequest(task);
    }

    const deleteTask = async (id) => {
        try {
            const res = await deleteTasksRequest(id);
            if(res.status === 204)setTasks(tasks.filter(task => task._id !== id));
        } catch (error) {
            console.log(error);  
        }
        
    }

    const getTask = async (id) => {
        try {
            const res  = await getTaskRequest(id);
            return res.data;
        } catch (error) {
            console.log(error);
            
        }
    }
    
    const updateTask = async (id, task) => {
        try {
            await updateTasksRequest(id, task);
        } catch (error) {
            console.log(error);
        }
    
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks,
            deleteTask,
            getTask,
            updateTask,
        }}>
            {children}
        </TaskContext.Provider>
    )
}