import React, { useState } from 'react';
import './App.css';
import Input from './components/input';
import Todo from './components/todo';

function App() {
  const [todoList,setTodoList]=useState([]);
  
  let addList=(inputText)=>{
    inputText.trim();
    if(inputText!==''){
      setTodoList([...todoList,inputText])
    }
  }

  const deleteTodo = (key)=>{
    let newTodoList = [...todoList];
    newTodoList.splice(key,1)
    setTodoList([...newTodoList])
  }

  return (
    <div className='App'>
      <Input addList={addList}  className='inputCompo'/>
      <h1> YOUR TODOS : </h1>
      {/* <hr /> */}
      {
        todoList.map((todo,i)=>{
          return (
            <Todo key={i} index={i} item={todo} delete={deleteTodo} className='inputComp'  />
          )
        })
      }
    </div>
  );
}
export default App;
