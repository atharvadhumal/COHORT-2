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
