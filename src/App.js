import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import Button from "./Button"
import styles from './App.module.css'
import {useState} from 'react'
function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState('');
    const onClick = () => setValue((prev)=> prev+1);
    const onChange = (event) => setKeyword(event.target.value);
    console.log('I run all the time');
    useEffect(()=>{
        console.log('CALL THE API...')
    },[]);
    useEffect(()=>{
        if(keyword !== "" && keyword.length > 5){
            console.log('Search For', keyword)
        }
    },[keyword])
  return (
    <div>
        <input
            value={keyword}
            onChange={onChange}
            type="text"
            placeholder="search Here"/>
      <h1 className={styles.title}>{counter}</h1>
        <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
