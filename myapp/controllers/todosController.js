import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllTodos = ( async (req, res) => {
    try {
        const todos = await prisma.todo.findMany();
        res.status(200).json({ message: 'Succeess get all Todos', data: todos});
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch todos', details: error.message });
    }
}) ;

export const getTodo = ( async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const todo = await prisma.todo.findUnique({
            where: { id },
        });
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
          }
        res.status(200).json({ message: 'Success get Todo', data: todo });
    } catch (error) {
        res.status(500).json({ error: ' Failed to fetch todo', details: error.message });
    };
});

export const createTodo = ( async (req, res) => {
    const { title, fill } = req.body;
    try {
        const newTodo = await prisma.todo.create({
            data: { title, fill },
        });
        res.status(201).json({ message: 'Success created Todo', data: newTodo });
    } catch (error) {
        res.status(500).json({ error: 'Failed to created Todo', details: error.message });
    };
});

export const updateTodo = ( async (req, res) => {
    const id = parseInt(req.params.id);
    const { title, fill } = req.body;
    try {
        const updated = await prisma.todo.update({
            where: { id },
            data: { title, fill },
        });
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
          }
        res.status(200).json(updated, { message: 'Success updated Todo', data: updated });
    } catch (error) {
        res.status(500).json({ error: 'Failed to updated Todo', details: error.message });
    };
});

export const deleteTodo = ( async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        await prisma.todo.delete({
            where: { id },
        });
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
          }
        res.status(200).json({ message: 'Succeess deleted Todo' });
    } catch (error) {
        res.status(500).json({ error: 'Failed deleted', details: error.message });
    };
});