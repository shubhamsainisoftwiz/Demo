import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoutes = ({Component}) => {

        const [flag, setFlag] = useState()
        const navigate = useNavigate()

        useEffect(()=>{
            const check = localStorage.getItem('check')
            setFlag(check)
        },[])

        if(!flag){
            navigate('/')
        }


  return (
        <Component />
  )
}

export default ProtectedRoutes