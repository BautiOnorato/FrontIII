import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0);
  const cambioColor = () => {
    switch(count) {
      case 10: 
        return {color: "blue"};
      case 20: 
        return {color: "red"};
      case 30: 
        return {color: "green"};
      case 40: 
        return {color: "violet"};
      case 50: 
        return {color: "orange"};
      default:
        return {color: "black"};
    }
  }

  return (
    <div>
      <div>
        <p style={cambioColor()}>La cuenta esta en: {count}</p>
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>Suma</button>
        <button onClick={() => setCount(count > 0 ? count - 1 : count)}>Resta</button>
      </div>
    </div>
  )
}

export default App

// return (
//   <div className="App">
//     <div>
//       <a href="https://vitejs.dev" target="_blank">
//         <img src="/vite.svg" className="logo" alt="Vite logo" />
//       </a>
//       <a href="https://reactjs.org" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//       </a>
//     </div>
//     <h1>Vite + React</h1>
//     <div className="card">
//       <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//       </button>
//       <p>
//         Edit <code>src/App.jsx</code> and save to test HMR
//       </p>
//     </div>
//     <p className="read-the-docs">
//       Click on the Vite and React logos to learn more
//     </p>
//   </div>
// )