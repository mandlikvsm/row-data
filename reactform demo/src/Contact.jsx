import React,  {useEffect, useState } from 'react';
import axios from 'axios';
import Contact1 from './Contact1';
import Contact2 from './Contact2';

const apiKey = "3140349f8363d436786f22fd435a1d92";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";

const Contact = () =>{

  const [movie, setMovie] = useState([])

  const name ="vishal Mandlik";

useEffect(() => {
 
  (async() =>
  {
  
    const res = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
  // console.log(res.data)
  setMovie(res.data.results);
  })()

}, [])


const mov = movie
.filter(val =>{
  if(val.title.includes('D')){

    return val;
  }
  
})
  
   .map((data,index) => {
  return <div key={index}>
    <h1>{data.title}</h1>
    </div>
})




// console.log(movie);

  return (
<>
{mov}
<Contact1/>
<Contact2  name={name} a = {movie}/>

</>

  );
}

export default Contact;