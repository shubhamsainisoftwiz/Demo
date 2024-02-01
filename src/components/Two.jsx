import React from 'react'
import { useNavigate } from 'react-router-dom'

const Two = () => {


  const navigate = useNavigate()

  const backHandler = () =>{
    navigate('/Demo')
  }


  const removeHandler = () =>{
    localStorage.removeItem("check")
  }


  return (

    <>
    <div>This is Page two</div>
    
    <button onClick={backHandler} >Go back</button>

  <button onClick={removeHandler} >remove local</button> 
   
    </>
  )
}

export default Two