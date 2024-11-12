import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [todos, setTodos] = useState([{
    title: 'go to gym',
    description: 'at 6am',
    completed: false
  },{
    title: 'study dsa',
    description: 'at 8am',
    completed: true
  },{
    title: 'study dsa',
    description: 'at 8am',
    completed: true
  },{
    title: 'study dsa',
    description: 'at 8am',
    completed: true
  }])
  

  return (
    <div>

      {/* <Todo title = {todos[0].title} description={todos[0].description}></Todo>
      <Todo title = {todos[1].title} description={todos[1].description}></Todo> */}

      {todos.map(function(todo){
        return <Todo title = {todo.title} description={todo.description}></Todo>
      })}
    </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>

}

export default App
