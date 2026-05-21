import React from 'react'

export default function TodoList({todos,handleComplete}) {

  return (
    <div>
        <h2>Child Component</h2>
      <ul>{todos.map((todo)=>(
        <li key={todo.id}> {todo.text} {!todo.isCompleted && (<button 
              onClick={() => handleComplete(todo.id)}
              style={{ cursor: 'pointer' }}
            >
             Complete
            </button>) }
        </li>
      ))}
        
        
      </ul>
    </div>
  )
}