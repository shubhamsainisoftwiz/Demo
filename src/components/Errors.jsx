import React from 'react'
import { useNavigate } from 'react-router-dom'

const Errors = () => {
  const navigate = useNavigate()

  const backHandler = () =>{
    navigate('/Demo')
  }
    

  return (
    <div>
        <p>Error Page</p>
        <button onClick={backHandler} >Go back</button>

    </div>
  )
}

export default Errors