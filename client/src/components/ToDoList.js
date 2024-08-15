import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, deleteToDo }) {
  return (
    <ul>
      {todos.map(todo => (
        <ToDoItem key={todo._id} todo={todo} deleteToDo={deleteToDo} />
      ))}
    </ul>
  );
}

export default ToDoList;
