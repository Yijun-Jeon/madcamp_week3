import React from "react";
import "../css/Stair.css";
import leeSmileImg from "../img/leesmile.png";

function Stair_lee_happy() {
  return (
    <div className='component__space' id='Stair'>
      <div className="heading">
            <h1 className="heading">Life from 25 to 30s</h1>
        </div>
    <div className="stair__background">
    <div className="stair__explain">
          <div className="explaining__par">
            <p>25세: 서울 중등 임용 수석 선발</p>
            <p>30대: 서울시 교육청 선정 카이스트 전산학부 학생을 가장 많이 배출한 정보 선생님 등극</p>
            <p>33세:  수능 필수 과목에 정보 과목 편성, 인터넷 강사로 직업 전향</p>
          </div>
      </div>
      <div className="stair">
        <span className="bollup">
            <img src = {leeSmileImg}></img>
        </span>
          <span className="pipeup"></span>
          <span className="pipeup"></span>
          <span className="pipeup"></span>
          <span className="pipeup"></span>
          <span className="pipeup"></span>
        </div>
      </div>
    </div>
  );
}

export default Stair_lee_happy;
