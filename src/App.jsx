import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [playStatus, setPlayStatus] = useState(false)
  const [timer, setTimer] = useState(4)

  useEffect(() => {
    if (!playStatus) return

    const intervalId = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(intervalId)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [playStatus])

  return (
    <>
      <header>

        <div id="title-container">
          <h1 id="title-text">Multiplication Table</h1>
        </div>

      </header>
      <main>

        { !playStatus ? (
          <div id="start-container">
            <button id="start-btn" onClick={() => setPlayStatus(true)}>Start</button>
          </div>
        ) : (
          <div id="timer-container">
            <h1 id="timer">{ timer }</h1>
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
