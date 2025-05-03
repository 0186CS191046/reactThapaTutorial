import React, { useEffect, useState } from "react"

const App = () => {
  const [num, setNum] = useState(0)
  const [nums, setNums] = useState(0)
  useEffect(() => {
    alert("i am clicked")
  },[nums])

  return (
    <>
      <button onClick={() => {
        setNum(num + 1)
      }}>click {num} times</button>
      <br/>
      <button onClick={() => {
        setNums(nums + 1)
      }}>click {nums} times</button>
    </>
  )
}

export default App; 