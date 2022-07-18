import React from "react";
import "../css/Stair.css";
import junSmileImg from "../img/junsmile.png";

function Stair_jeon_happy() {
  return (
    <div className='component__space' id='Stair'>
      <div className="heading">
            <h1 className="heading">Life from 25 to 30s</h1>
        </div>
    <div className="stair__background">
      <div className="stair__explain">
          <div className="explaining__par">
            <p>28세: IT 회사 '이준극락사' 창업</p>
            <p>30대: 5년만에 시가총액 40조에 달하는 회사로 성장</p>
            <p> - 세계 100대 기업에 선정</p>
            <p> - 카카오는 사내 부조리로 인해 상장폐지의 위기를 맞이함</p>
          </div>
      </div>
      <div className="stair">
        <span className="bollup">
            <img src = {junSmileImg}></img>
        </span>
        <span className="pipeup">
        </span>
        <span className="pipeup"></span>
        <span className="pipeup"></span>
        <span className="pipeup"></span>
        <span className="pipeup"></span>
      </div>
    </div>
    </div>
  );
}

export default Stair_jeon_happy;
