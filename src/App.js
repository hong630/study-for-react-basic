import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import Button from "./Button"
import styles from './App.module.css'
import {useState} from 'react'
import {resetFirstInputPolyfill} from "web-vitals/dist/modules/lib/polyfills/firstInputPolyfill";


function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () =>{
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false)
  }
  useEffect(()=>{
    getMovies()
  },[])
  console.log(movies);
  return (

  )
}

export default App;
