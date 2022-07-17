import React from "react";
import "../css/Stair_sad.css";
import leeCryImg from "../img/leecry2.png";

function Stair_lee_sad() {
  return (
    <div className='component__space' id='Stair'>
      <div className="heading">
            <h1 className="heading">Life from 25 to 30s</h1>
            <p className="heading p__color">I didn't nothing</p>
            <p className="heading p__color">I didn't nothing</p>
        </div>

<div className="stair__background">
        <div className="stair">
          <span className="boll">
            <img src={leeCryImg}></img>
          </span>
          <span className="pipe"></span>
          <span className="pipe"></span>
          <span className="pipe"></span>
          <span className="pipe"></span>
          <span className="pipe"></span>
        </div>
        {/* <div className="stairletters1">21세</div>
        <div className="stairletters2">22세</div>
        <div className="stairletters3">23세</div>
        <div className="stairletters4">24세</div>
        <div className="stairletters5">25세</div> */}
      </div>
    </div>
    
      
  );
}

export default Stair_lee_sad;
