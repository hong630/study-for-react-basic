import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import Button from "./Button"
import styles from './App.module.css'
import {useState} from 'react'


function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange =(event)=>{
    setToDo(event.target.value)
  }
  const onSubmit = (event) =>{
    event.preventDefault();
    if(toDo === ""){
      return
    }
    setToDo("");
  }
  console.log(toDos)
  return (
    <div>
      <form onSubmit={onSubmit} action="">
        <input onChange={onChange} value={toDo} type="text" placeholder={"write your todo"}/>
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
