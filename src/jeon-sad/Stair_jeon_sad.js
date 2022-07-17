import React from "react";
import "../css/Stair_sad.css";
import junCryImg from "../img/juncry2.png";

function Stair_jeon_sad() {
  return (
    <div className='component__space' id='Stair'>
      <div className="heading">
            <h1 className="heading">Life from 25 to 30s</h1>
            <p className="heading p__color">I didn't nothing</p>
            <p className="heading p__color">I didn't nothing</p>
        </div>

<div className="stair__background">
  <div className="stair__explain">
    <div className="explaining__par">
    <p>30대: CPA 합격 후 작은 회사에 취칙하여 빚만 갚으면서 전전긍긍</p>
    <p>- 32세: 통합 7수만에 CPA 합격</p>
    <p>- 33세: 중소 회계 법인에 취직하여 빚 청산 시작</p>
    <p>- 37세: 마이너스 통장 탈출</p>
    
    
    
    </div>
  </div>
        <div className="stair">
          <span className="boll">
            <img src={junCryImg}></img>
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

export default Stair_jeon_sad;
