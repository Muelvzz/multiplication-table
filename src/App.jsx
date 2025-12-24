import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [playStatus, setPlayStatus] = useState(false)

  return (
    <>
      <header>

        <div id="title-container">
          <h1 id="title-text">Multiplication Table</h1>
        </div>

      </header>
      <main>

        { !playStatus && (
          <div id="start-container">
            <button id="start-btn" onClick={() => setPlayStatus(true)}>Start</button>
          </div>
        )}

      </main>

      <footer>
        <a href="" id="footer-link">Made by Muelvin Lopez</a>
      </footer>
    </>
  )
}

export default App
