import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [playStatus, setPlayStatus] = useState(false)
  const [isSolved, setIsSolved] = useState(false)
  const [timer, setTimer] = useState(4)

  const [multiplicand, setMultiplicand] = useState(0)
  const [multiplier, setMultiplier] = useState(0)

  const randomNumberRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

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

  useEffect(() => {
    setMultiplicand(randomNumberRange(1, 10))
    setMultiplier(randomNumberRange(1, 10))
  }, [multiplicand, multiplier])

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
        ) : timer === 0 && playStatus ? (
          <div id="quiz-container">
            <h1 id='question'>{ multiplicand } x { multiplier } = ?</h1>
            <div id="options-container"></div>
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
