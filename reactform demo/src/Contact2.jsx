import React from 'react'
import Contact3 from './Contact3';

const Contact2 = ({name ,a}) => {

    // console.log(a);
    // const res = a.map((val) =><h1>{val.id}</h1> )

  return (
    <div>Contact2

        {/* <p>{res}</p> */}

        <Contact3 a={a}/>
    </div>

  )
}

export default Contact2