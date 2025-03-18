import { useState } from "react";

function App() {
  
  const [todos, setTodos] = useState([{
    title: "Go to Gym",
    Description: "Go to gym from 7 to 9",
     completed: false
  },
  {
    title: "Study DSA",
    Description: "solve 5 problems",
    completed: true

  }]); //defines the initial state which means it will start from 0s
  
  return (

    <div>
     {todos.map(function(todo){
      return 
      <Todos title={todos.title} Description={todo.Description} />
     })}
    </div>
  )
}

function Todos(props) {

  return <div>s
    <h1>{props.title}</h1>
    <h2>{props.Description}</h2>
  </div>
}

export default App