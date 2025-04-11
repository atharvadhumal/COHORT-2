// import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom'
// import React, { Suspense } from 'react'
// import { lazy } from 'react'

// const Dashboard = lazy(()=> import('./components/Dashboard'))
// const Landing = lazy(()=> import('./components/Landing'))

// function App() {

//   return (

//       <>

//         <BrowserRouter>
//           <Appbar />
//         <Routes>
//            <Route path='/dashboard' element={<Suspense fallback={"...loading"}><Dashboard /></Suspense>} /> {/*it will show ...loading for a very quick time */}
//           <Route path='/' element={<Suspense fallback={"...loading"}><Landing /></Suspense>}/>
//          </Routes> {/*suppose any data will be coming from the api we will use lazy loading here */}

//       </BrowserRouter>
//     </>

//   )
// }

// function Appbar() {
//   const navigate = useNavigate()

//   return (
//     <div>
//       <button onClick={() => {
//         navigate("/dashboard")
//       }}>
//         dashboard
//       </button>

//       <button onClick={() => {
//         navigate("/")
//       }}>
//         landing page
//       </button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'


const App = () => {

  const [count, setCount] = useState(0)
  return (

    <div>

      <Count count={count} />
      <Button count={count} setCount={setCount}/>

    </div>
  )
}

function Count({ count }) {
  return (
    <div>
     { count } 
    </div>
    
  )
}

function Button({setCount, count}) {
  return (
    <div>
      <button onClick={() => {
        setCount(count + 1)
      }}>
        Increase
      </button>

      <button onClick={() => {
        setCount(count - 1)
      }}>
        Decrease
      </button>
    </div>

  )
}

export default App
