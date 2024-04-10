import React, { useState } from 'react'

function Input(props) {
  const [inputText,setInputText] = useState('')
  return (
    <div className='inputSection'>
        <input
          type="text"
          value={inputText}
          id="inputText"  
          placeholder='Enter Your TODO !' 
          onChange={e=>{
            setInputText(e.target.value)
          }}/>

        <button 
          className='InputButton' 
          onClick={()=>{
            if (inputText !== '') {
              const trimmedInput = inputText.trim();
              props.addList(trimmedInput);
              setInputText('');
            }
          }}
        >Enter
        </button>
    </div>
  )
}

export default Input