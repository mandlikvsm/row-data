import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './action';

function Login() {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('mandlivs@gmail.com');
    const [password, setPassword] = useState('1234567');


    console.log(email,password);
    

const handler = () =>{
    dispatch(login(email,password))
    console.log('login')
    
}

  return (
    <div>
        <h1>Welcome</h1>
        
        
        
        <button onClick={handler} style={{color:'red',backgroundColor: "lightblue"}}>Login</button>
        
        <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
        
        
        
        
        
        </div>
  )
}

export default Login