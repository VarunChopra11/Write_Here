import React from 'react'
import './todo.css';

function Todo(props) {
  
  return (
    <div className='todos'>
        <div className = 'index'>
          {(props.index+1)+'.)'}
        </div>

        <div className='todo'>
          {props.item}
        </div>
        <button
         onClick={e=>{
          props.delete(props.index)
         }}
        >Delete</button>
        
    </div>
  )
}

export default Todo