import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/todos')
      .then(res => setTodos(res.data))
      .catch(err => console.log(err));
  }, []);

  const addToDo = () => {
    if (newTodo.trim() === '') return;

    axios.post('http://localhost:5000/todos', { text: newTodo })
      .then(res => setTodos([...todos, res.data]))
      .catch(err => console.log(err));

    setNewTodo('');
  };

  const deleteToDo = (id) => {
    axios.delete(`http://localhost:5000/todos/${id}`)
      .then(() => setTodos(todos.filter(todo => todo._id !== id)))
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addToDo}>Add</button>
      <ToDoList todos={todos} deleteToDo={deleteToDo} />
    </div>
  );
}

export default App;
