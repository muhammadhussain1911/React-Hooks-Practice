import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  let [time1, setTime1] = useState(1)
  let [result1, setResult1] = useState(1)

  let [time2, setTime2] = useState(1)
  let [result2, setResult2] = useState(2)

  let [time3, setTime3] = useState(1)
  let [result3, setResult3] = useState(3)

  let [time4, setTime4] = useState(1)
  let [result4, setResult4] = useState(4)

  let [time5, setTime5] = useState(1)
  let [result5, setResult5] = useState(5)

  let [time6, setTime6] = useState(1)
  let [result6, setResult6] = useState(6)

  let [time7, setTime7] = useState(1)
  let [result7, setResult7] = useState(7)

  let [time8, setTime8] = useState(1)
  let [result8, setResult8] = useState(8)

  let [time9, setTime9] = useState(1)
  let [result9, setResult9] = useState(9)

  let [time10, setTime10] = useState(1)
  let [result10, setResult10] = useState(10)


  const times1 = () => {
    setTime1(time1 + 1)
    setResult1(result1 + 1)
  }
  const times2 = () => {
    if (time2 < 10) {
      setTime2(time2 + 1)
      setResult2(result2 + 2)
    }
  }
  const times3 = () => {
    setTime3(time3 + 1)
    setResult3(result3 + 3)
  }
  const times4 = () => {
    setTime4(time4 + 1)
    setResult4(result4 + 4)
  }
  const times5 = () => {
    setTime5(time5 + 1)
    setResult5(result5 + 5)
  }
  const times6 = () => {
    setTime6(time6 + 1)
    setResult6(result6 + 6)
  }
  const times7 = () => {
    setTime7(time7 + 1)
    setResult7(result7 + 7)
  }
  const times8 = () => {
    setTime8(time8 + 1)
    setResult8(result8 + 8)
  }
  const times9 = () => {
    setTime9(time9 + 1)
    setResult9(result9 + 9)
  }
  const times10 = () => {
    setTime10(time10 + 1)
    setResult10(result10 + 10)
  }


  return (
    <>
      <button onClick={times1}> 1 x {time1} = {result1} </button>
      <button onClick={times2}> 2 x {time2} = {result2} </button>
      <button onClick={times3}> 3 x {time3} = {result3} </button>
      <button onClick={times4}> 4 x {time4} = {result4} </button>
      <button onClick={times5}> 5 x {time5} = {result5} </button>
      <button onClick={times6}> 6 x {time6} = {result6} </button>
      <button onClick={times7}> 7 x {time7} = {result7} </button>
      <button onClick={times8}> 8 x {time8} = {result8} </button>
      <button onClick={times9}> 9 x {time9} = {result9} </button>
      <button onClick={times10}> 10 x {time10} = {result10} </button>
    </>
  )
}

export default App