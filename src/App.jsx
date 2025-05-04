import React, { useEffect, useState } from "react"
import axios from "axios"

const App = () => {
  const [num, setNum] = useState(1)
  const [ name, setName] = useState()
  const [ moves, setMoves] = useState()

  useEffect(() => {
    async function getData(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      setName(res.data.name)
      setMoves(res.data.moves.length)
      
    }

    getData()
  })

  return (
    <>
      <h1>
        You choose {num} value
      </h1>
      <h2>My name is {name}</h2>
      <h3>My moves are {moves}</h3>
      <select onChange={(e)=>{
        setNum(e.target.value)
      }}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  )
}

export default App; 