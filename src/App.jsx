import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [playStatus, setPlayStatus] = useState(false)
  const [isSolved, setIsSolved] = useState(false)
  const [timer, setTimer] = useState(4)

  const [multiplicand, setMultiplicand] = useState(0)
  const [multiplier, setMultiplier] = useState(0)
  const [product, setProduct] = useState(0)

  const [listNumbers, setListNumbers] = useState([])

  const randomNumberRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  const generateQuestion = () => {
    const a = randomNumberRange(1, 10)
    const b = randomNumberRange(1, 10)
    const correct = a * b

    const options = new Set()
    while (options.size < 3) {
      const n = randomNumberRange(1, 100)
      if (n !== correct) options.add(n)
    }

    const optionsArr = Array.from(options)
    const insertIndex = Math.floor(Math.random() * 4)
    optionsArr.splice(insertIndex, 0, correct)

    setMultiplicand(a)
    setMultiplier(b)
    setProduct(correct)
    setListNumbers(optionsArr)
    setIsSolved(false)
  }

  useEffect(() => {
    if (!playStatus) return

    if (timer === 0) {
      generateQuestion()
    }

    const intervalId = setInterval(() => {
      setTimer(prev => Math.max(prev - 1, 0))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [playStatus, timer])

  useEffect(() => {
    if (isSolved) {
      generateQuestion()
    }
  }, [isSolved])

  const startGame = () => {
    setTimer(4)
    setPlayStatus(true)
    setIsSolved(false)
    setListNumbers([])
  }

  return (
    <>
      <header>

        <div id="title-container">
          <h1 id="title-text">Multiplication Table</h1>
        </div>

      </header>
      <main>

        {!playStatus ? (

          <div id="start-container">
            <button id="start-btn" onClick={startGame}>Start</button>
          </div>

        ) : timer === 0 && playStatus ? (

          <div id="quiz-container">
            <h1 id='question'>{multiplicand} x {multiplier} = ?</h1>
            <div id="options-container">

              {listNumbers.map((number, idx) => (
                number === product ? (
                  <button
                    key={idx}
                    className='options'
                    onClick={() => setIsSolved(true)}
                  >
                    <h2>{ product }</h2>
                  </button>
                ) :
                  <button
                    key={idx}
                    className='options'
                    onClick={() => setIsSolved(false)}
                  >
                    <h2>{ number }</h2>
                  </button>
              ))}
            </div>
          </div>

        ) : (

          <div id="timer-container">
            <h1 id="timer">{timer}</h1>
          </div>

        )}

      </main>
      <footer>

        <a href="#" id="footer-link">Made by Muelvin Lopez</a>

      </footer>

    </>
  )
}

export default App
