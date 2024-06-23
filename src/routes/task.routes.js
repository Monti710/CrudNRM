import { Router } from "express";
import { authRequired} from  '../middlewares/validateToken.js';
import {getTasks,getTask,createTask,updateTask,deleteTask} from '../controllers/tasks.controller.js';
const router = Router();

router.get('/tasks', authRequired, getTasks ) // READ ALL
router.post('/tasks', authRequired, createTask ) //CREATE
router.get('/tasks/:id', authRequired, getTask ) //READ ONE
router.put('/tasks/:id', authRequired, updateTask ) // UPDATE
router.delete('/tasks/:id', authRequired, deleteTask ) // DELETE

export default router