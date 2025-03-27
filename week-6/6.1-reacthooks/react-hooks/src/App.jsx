<<<<<<< HEAD
// import React from 'react'
// import { useState } from 'react'

// let counter = 4;

// const App = () => {

//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "go to gym",
//       description: "from 9 to 10"
//     },
//     {
//       id: 2,
//       title: "go to clg",
//       description: "from 10 to 2"
//     },
//     {
//       id: 3,
//       title: "go for round",
//       description: "from 8 to 9"
//     }
//   ])

//   function addTodo() {
//     setTodos([...todos, //... is spread operator that spread it and then it will add the new todo
//       {
//         id: counter++, //making it go one up through counter++ CREATED an global variable above
//         title: Math.random(), //generates random number
//         description: Math.random() //generates random number
//       }
//     ])

//     //one more logic does the same thing as above
//     // const newTodos = []
//     // for (let index = 0; index < todos.length; index++) {
//     //   newTodos.push(todos[index])

//     // }

//     // newTodos.push({
//     //   id: 4,
//     //   title: Math.random(),
//     //   description: Math.random()
//     // })
//     // setTodos(newTodos)


//   }
//   return (
//     <div>

//       <button onClick={addTodo}>
//         Add a Todo
//       </button>

//       {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}

//     </div>
//   )
// }

// function Todo({ title, description }) {
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h3>
//       {description}
//     </h3>
//   </div>
// }

// export default App

import React from 'react'

function App() {
  return <div>
    <CardWrapper innerComponent={<TextComponent />} />
  </div>

}

function CardWrapper({ innerComponent }) {
  return <div style={{ border: "2px solid black" }}>
    {innerComponent}
  </div>
}

function TextComponent() {
  return <div>
    hi there
  </div>
}


export default App
=======
import { useState } from 'react'

function App() {

const [title, setTitle] = useState("atharva1") //so the initial title we'll set to atharva1
  
function updateTitle() {
  setTitle("my name is" + Math.random())
}

return (
    <div>
    <button onClick={updateTitle}>Click me to change</button>
      <Header title={title} />
      <Header title="atharva dhumal 2" />
    </div>
  )
}

function HeaderWithButton() {
  const [title, setTitle] = useState("atharva1") //so the initial title we'll set to atharva1
  return (
  <button onClick={updateTitle}>Click me to change</button>
  )
}




//inshort this is props passing
function Header({title}) { //this funtion takes title as an input from the upper function and renders in the div
  return (
<div>
  {title} {/*here the title is rendered */}
</div>    
  )
}

export default App
>>>>>>> e495e13b3bfb64a69c2fbedb39cc3af47bdd9b3d
