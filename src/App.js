import React from 'react';
import './css/App.css';
import Home from "./Home"
import "./css/If.css";
import {useState} from "react";
import {useEffect} from "react";
import clockGif from "./img/clock-unscreen.gif";



function App() {
  let [ alert, alertSet ] = useState(true);
    useEffect(()=>{
    let timer = setTimeout(()=>{ alertSet(false) }, 2000);
    });
  return (
    alert === true?(
      <div className="If__background">
        <div className="If__word">If...</div>
      </div>) : <div className="App">
      <Home/>
    </div> 
    
  );
}

export default App;
