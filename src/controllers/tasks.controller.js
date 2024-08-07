import Task from '../models/task.model.js';

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id })
            .populate('user')
            .sort({ date: 1 }); 
        
        res.json(tasks);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const createTask = async (req, res) => {
    const { title, description, date} = req.body
    try {
        const newTask = new Task( {
            title, 
            description, 
            date,
            user: req.user.id,
            });
            const savedTask = await newTask.save();
            res.json(savedTask);
    }catch (error) {
        return res.status(500).json({message: "Something went  wrong"})
    }
    
}

export const getTask = async (req, res) => {
    try{
        const task = await Task.findById(req.params.id).populate('user');
        if(!task) return res.status(404).json({message: "Task not found"})
            res.json(task);     
    }catch(error){
        return res.status(404).json({message: "Task not found"})
    }
};

export const updateTask = async (req, res) => {
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true, //NEW DATA 
        });
        if(!task) return res.status(404).json({message: "Task not found"})
        res.json(task); 
    }catch(error){
        return res.status(404).json({message: "Task not found"})
    }
};

export const deleteTask = async (req, res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task) return res.status(404).json({message: "Task not found"})
        return res.sendStatus(204)
    }catch(error){
        return res.status(500).json({message: "Task not found"})
    }
};