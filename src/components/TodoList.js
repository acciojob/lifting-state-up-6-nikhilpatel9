import React from "react";

function TodoList({ todos, handleComplete }) {
  console.log(todos);
  return (
    <ul>
      <h3>Child Component</h3>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo.data}
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;