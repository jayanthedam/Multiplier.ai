const express = require('express');
const router = express.Router();
const ToDo = require('../models/Todo');

router.get('/', async (req, res) => {
  try {
    const todos = await ToDo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const todo = new ToDo({
    text: req.body.text
  });

  try {
    const newToDo = await todo.save();
    res.status(201).json(newToDo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const todo = await ToDo.findById(req.params.id);
    if (todo == null) {
      return res.status(404).json({ message: 'Cannot find to-do item' });
    }

    await todo.remove();
    res.json({ message: 'To-Do item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
