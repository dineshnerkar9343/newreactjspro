import React, { useState } from 'react';


export default function Mode() {

//usestate snippet

const [myStyle, setMyStyle] = useState({
    color: 'black',
    background: 'white'
})

const toggleStyle=()=>{
    if(myStyle.color === 'white'){
        setMyStyle({
        color: 'black',
        background: 'white'
        })
    }
    else{
        setMyStyle({
            color: 'white',
            background: 'black'
        })
    }
}

  return (
   <>
<div className="container" style={myStyle}>
<button className="btn btn-dark" style={myStyle} onClick={toggleStyle}>toggle mode</button>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem tempora sed quae doloremque ullam eveniet aliquid aspernatur, blanditiis necessitatibus quidem reprehenderit harum nobis enim aperiam? Delectus doloribus nisi quos corrupti.</p>
</div>

</>
  )
}
