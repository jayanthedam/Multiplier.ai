import React from 'react';

function ToDoItem({ todo, deleteToDo }) {
  return (
    <li>
      {todo.text}
      <button onClick={() => deleteToDo(todo._id)}>Delete</button>
    </li>
  );
}

export default ToDoItem;
