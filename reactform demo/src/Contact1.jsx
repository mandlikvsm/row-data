import React, { useEffect, useState } from 'react'

const Contact1 = () => {


    const [time, setTime] = useState(new Date());

    useEffect(() => {
     const timer = setInterval(() =>setTime(new Date()), 1000)
    
    
      return () => {
        clearInterval(timer)
      }
    }, [])
    
// console.log(props)





  return (
    <div>
        
      <h1> Contact1 </h1> 
      
    <p>Time : {time.toLocaleTimeString()}</p>
    <p>Date : {time.toLocaleDateString()}</p>


    </div>
  )
}

export default Contact1