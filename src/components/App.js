import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";
const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, data: "Learn React", completed: false },
    { id: 2, data: "Build a React app", completed: false },
    { id: 3, data: "Deploy the React app", completed: false },
  ]);
  function handleComplete(id) {
    setTodos((prev) =>
      prev.map((todo) => {
        return todo.id == id ? { ...todo, completed: true } : todo;
      }),
    );
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;