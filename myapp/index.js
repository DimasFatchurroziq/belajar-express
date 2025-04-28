const express = require('express');
const app = express();
const port = 3000;

// Middleware agar bisa baca JSON
app.use(express.json());

// Data Todo List disimpan di memory
let todos = [];

// Route untuk ambil semua todo
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Route untuk tambah todo baru
app.post('/todos', (req, res) => {
  const { title } = req.body;
  const newTodo = { id: Date.now(), title };
  todos.push(newTodo);
  res.status(201).json({newTodo, message: 'Tode created'});
});

// Route untuk update todo berdasarkan id
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title } = req.body;

  // Cari todo berdasarkan id
  const todo = todos.find(todo => todo.id === id);

  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  // Update title-nya
  todo.title = title;

  res.status(200).json(todo);
});


// Route untuk hapus todo berdasarkan id
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.status(200).json({ message: 'Todo deleted' });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
