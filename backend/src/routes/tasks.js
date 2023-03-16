import { Router } from "express";
import {
  saveTask,
  deleteTask,
  getTask,
  getTasks,
  // getTasksCount,
  updateTask,
} from "../controller/tasks";

const router = Router();
/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
 */
/**
 * @swagger
 * /tasks:
 * get:
 *  summary: Get all tasks
 *  tags: [Tasks]
 */
router.get("/tasks", getTasks);

/**
 * @swagger
 * /tasks/count:
 * get:
 *  summary: Get total tasks counter
 *  tags: [Tasks]
 */
// router.get("/tasks/count", getTasksCount);

/**
 * @swagger
 * /tasks/id:
 * get:
 *  summary: Get a task by id
 *  tags: [Tasks]
 */
router.get("/tasks/:id", getTask);

/**
 * @swagger
 * /tasks:
 * post:
 *  summary: Save a new task
 *  tags: [Tasks]
 */
router.post("/tasks", saveTask);

/**
 * @swagger
 * /tasks:
 * delete:
 *  summary: Delete a task by id
 *  tags: [Tasks]
 */
router.delete("/tasks/:id", deleteTask);

/**
 * @swagger
 * /tasks:
 * put:
 *  summary: Update a task by id
 *  tags: [Tasks]
 */
router.put("/tasks/:id", updateTask);

export default router;
