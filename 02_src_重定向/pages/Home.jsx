import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
export default function Home() {
  const [num, setNum] = useState(2)
  function changeNum () {
    setNum(9)
  }
  return (
    <div>
      <h3>我是Home的内容</h3>
      {
        num === 9
        ? <Navigate to="/about" />
        // ? <Navigate replace to="/about" />
        : <h4>num的值是： { num } </h4>
      }
      <button onClick={ changeNum }>修改num值</button>
    </div>
  )
}
