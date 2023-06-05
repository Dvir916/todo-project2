import { Router } from "express";
import { getRepository } from "typeorm";
import { Todo } from "../entities/todo";

const dataRouter = Router();

dataRouter.get("/Tasks", async (req, res) => {
  try {
    const todoRepository = getRepository(Todo);
    const todos = await todoRepository.find({ order: { id: "ASC" } });
    res.json(todos);
  } catch (error) {
    console.error("Error executing database query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

dataRouter.get("/lastID", async (req, res) => {
  try {
    const todoRepository = getRepository(Todo);
    const todos = await todoRepository.find({ order: { id: "DESC" } });
    res.json(todos[0].id);
  } catch (error) {
    console.error("Error executing database query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

dataRouter.post("/Tasks", async (req, res) => {
  try {
    const { text } = req.body;
    const todoRepository = getRepository(Todo);
    const todo = todoRepository.create({
      text,
      isComplete: false,
    });
    await todoRepository.insert(todo);
    res.json("task added!");
  } catch (error) {
    console.error("Error executing database query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

dataRouter.delete("/Tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todoRepository = getRepository(Todo);
    todoRepository.delete(id);
    res.json({ message: `Todo with id ${id} was deleted successfully!` });
  } catch (error) {
    console.error("Error executing database query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

dataRouter.patch("/Statuses", async (req, res) => {
  try {
    const { complete, id } = req.body;
    const todoRepository = getRepository(Todo);
    await todoRepository.update(id, { isComplete: complete });
    res.json(`Todo with id ${id} updated successfully!`);
  } catch (error) {
    console.error("Error executing database query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export { dataRouter };
