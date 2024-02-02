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

      <p>Please Click on "set local" first. then you are able to reach on page two</p>
        <button onClick={setHandler} >set local</button>
        <button onClick={clickHandler} >Two</button>


    </div>
  )
}

export default One


