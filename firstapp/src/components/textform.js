import React, { useState } from 'react'

export default function Textform() {

//casedeclaration
const [text, setText] = useState('');

//function for uppercase button
const uppercaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
}

//function for lowercase button
const lowercaseClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
}

//function to clear text
const clearText = () => {
    let newText = '';
    setText(newText);
} 

//event declaration
const clickOnChange = (eve) => {
    setText(eve.target.value);
}

  return (
      <>
      <div classname="container">
           <div className="form-group mx-5">
               <h2>text analyser</h2>
       {/* text area jsx */}
        <textarea className="form-control" onChange={clickOnChange} value={text} id="textBox" rows={6} placeholder="Enter your text" />
      </div>

      {/* button jsx */}
      <button className="btn btn-dark mx-2" onClick={uppercaseClick}>convert to uppercase</button>
      <button className="btn btn-dark mx-2" onClick={lowercaseClick}>convert to lowercase</button>
      <button className="btn btn-dark mx-2" onClick={clearText}>Clear Text</button>
       </div>
      </>
    
  )
}
