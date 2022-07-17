import React from "react";
import "../css/Stair_sad.css";
import leeCryImg from "../img/leecry2.png";

function Stair_lee_sad() {
  return (
    <div className='component__space' id='Stair'>
      <div className="heading">
            <h1 className="heading">Life from 25 to 30s</h1>
        </div>

    <div className="stair__background">
      <div className="stair__explain">
        <div className="explaining__par">
          <p style={{"margin-top" : "9%"}}>25세: 서울 중등 임용 1차 탈락</p>
          <p> - 연휴 가족 모임 참여 금지</p>
          <p>35세: 10수 끝에 정보 입용 달성</p>
          <p> - 설 연휴 가족 모임 참여 재개</p>
        </div>
      </div>
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
    </div>
  </div>    
  );
}

export default Stair_lee_sad;
