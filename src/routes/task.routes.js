import { Router } from "express";
import { authRequired} from  '../middlewares/validateToken.js';
import {getTasks,getTask,createTask,updateTask,deleteTask} from '../controllers/tasks.controller.js';
const router = Router();

import {validateSchema} from '../middlewares/validator.middleware.js'
import {createTaskSchema} from '../schemas/task.schema.js'

router.get('/tasks', authRequired, getTasks ) // READ ALL
router.post('/tasks', authRequired, validateSchema(createTaskSchema), createTask ) //CREATE
router.get('/tasks/:id', authRequired, getTask ) //READ ONE
router.put('/tasks/:id', authRequired, updateTask ) // UPDATE
router.delete('/tasks/:id', authRequired, deleteTask ) // DELETE

export default router