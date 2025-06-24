import React from 'react'

/* 
todos = [
    {
    title: sgdasgfadf,
    descriptuio: sdgadfgh
    }
]

*/



function Todos({todos}) {
  return (
    <div>
        {todos.map(function(todo, index){
            return <div key={index}>
                       <h1>{todo.title}</h1>
                       <h2>{todo.description}</h2>
                       <button>{todo.completed == true ? "completed": "mark as complete"}</button>
                 </div>
        })}
    </div>
  )
}

export default Todos
