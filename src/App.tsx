import React from 'react'
// import logo from './logo.svg'
import './App.css'
import Test from './pages/Test'

import { padZero, createUser } from './utils/utils'
let a: string = 'hello typescript'
console.log(padZero('9'))
console.log(padZero(11))
console.log(padZero('23'))

createUser('xiaoming', 30, 0, 'web')

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>{a}</p>
        <Test ee="嘿嘿"></Test>

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  )
}

export default App
