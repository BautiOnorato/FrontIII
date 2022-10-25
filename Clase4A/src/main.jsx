import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './hola.module.css'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 className={styles.title}>Hola</h1>
  </React.StrictMode>
)
