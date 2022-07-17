import React from "react";
import "../css/Stair_sad.css";
import junCryImg from "../img/juncry2.png";

function Stair_jeon_sad() {
  return (
    <div className='component__space' id='Stair'>
      <div className="heading">
            <h1 className="heading">Life from 25 to 30s</h1>
        </div>

<div className="stair__background">
  <div className="stair__explain">
    <div className="explaining__par">
    <p>26세: 팀플에도 재능이 없어 고독하게 CPA 준비</p>
    <p>32세: 통합 7수만에 CPA 합격</p>
    <p>33세: 중소 회계 법인에 취직하여 빚 청산 시작</p>
    <p>39세: 마이너스 통장 탈출</p>
    
    
    
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
      </div>
    </div>
    
      
  );
}

export default Stair_jeon_sad;
