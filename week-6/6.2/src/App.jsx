import { useEffect, useState } from 'react'
import axios from "axios"


function useTodos() { //here we made can customHook
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then( (response) => {
        setTodos(response.data.slice(0, 5))
      })
  }, []);  

  return todos;
}
  

function App() {
const todos = useTodos(); //when customHook is called it will run 

  return (
    <>
    {todos}
    </>
  )
}

export default App; 