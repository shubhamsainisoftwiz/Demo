import React from 'react'
import { useNavigate } from 'react-router-dom'

const One = () => {
    const navigate = useNavigate()
    const clickHandler = () =>{
        navigate('/two')
    }

    const setHandler = () =>{
        localStorage.setItem('check',"hello")
    }

  return (
    <div>
        <button onClick={setHandler} >set local</button>
        <button onClick={clickHandler} >Two</button>
    </div>
  )
}

export default One