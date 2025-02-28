const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');
const authMiddleware = require('../middleware/auth');

router.get('/todos', authMiddleware, async (req, res) => {
    try {
        const todos = await Todo.find({ user: req.user._id });
        res.json(todos);
    } catch (error) {
        res.status(500).send('Server error');
    }
});
router.post('/todos', authMiddleware, async (req, res) => {
    try {
        const todo = new Todo({ ...req.body, user: req.user._id });
        await todo.save();
        res.status(201).send(todo);
    } catch (error) {
        res.status(400).send('Could not create ToDo item');
    }
});