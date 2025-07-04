import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      {/* <div style={{display: 'flex', justifyContent: 'center'}}> {/*this is how we write css text in react
        <div style={{backgroundColor: 'red'}}>hi</div>
        <div style={{backgroundColor: 'blue'}}>hi</div>
        <div style={{backgroundColor: 'green'}}>hi</div>
      </div> */}

        <div className='grid grid-cols-3'> {/* this grid will have 3 columns if 4 is added it will go below the 1st */}
          <div className='bg-red-500'>hi</div>
          <div className='bg-blue-500'>hi</div>
          <div className='bg-green-500'>hi</div>
          <div className='bg-green-500'>hi</div>
        </div>
    </>
  )
}

export default App
