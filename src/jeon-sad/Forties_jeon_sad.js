import React from "react";
import "../css/Service.css";
import statusImg from '../img/status_sad.png'
import moneyImg from '../img/money_sad.png'
import peopleImg from '../img/people_sad.png'
import mindImg from '../img/mind_sad.png'
import healthImg from '../img/health_sad.png'
import dreamImg from '../img/dream_sad.png'

function Forties_jeon_sad() {
  return (
    <div className="service component__space" id="40s">
      <div className="heading">
        <h1 className="heading">40대</h1>
        <p className="heading p__color"></p>
        <p className="heading p__color"></p>
      </div>

      <div className="container">
        <div className="col__1">
          <div className="row">
            <div className="col__3__40">
              <div className="service__box pointer">
                <div className="icon">
                <img src={moneyImg} alt="" className="ability__img"></img>
                </div>
                <div className="service__meta">
                  <h1 className="service__text">돈</h1>
                  <p className="p service__text p__color">생활고에 시달리다가</p>
                  <p className="p service__text p__color">부장의 유혹을 이기지 못해</p>
                  <p className="p service__text p__color">94억의 회사 자금 횡령</p>
                </div>
              </div>
            </div>

            <div className="col__3__40">
              <div className="service__box pointer">
                <div className="icon">
                <img src={peopleImg} alt="" className="ability__img"></img>
                </div>
                <div className="service__meta">
                  <h1 className="service__text">사람</h1>
                  <p className="p service__text p__color">5년째 가족과 연락 두절</p>
                  <p className="p service__text p__color">20년지기 친구도 손절</p>
                  <p className="p service__text p__color">유일한 인맥 - 이영준</p>
                </div>
              </div>
            </div>

            
            <div className="col__3__40">
              <div className="service__box pointer">
                <div className="icon">
                <img src={statusImg} alt="" className="ability__img"></img>
                </div>
                <div className="service__meta">
                  <h1 className="service__text">지위</h1>
                  <p className="p service__text p__color">10년째 말년 사원</p>
                  <p className="p service__text p__color">커피 심부름 전문가</p>
                  <p className="p service__text p__color">복사기 아직도 못고침</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col__1">
          <div className="row">
            <div className="col__3__40">
              <div className="service__box pointer">
                <div className="icon">
                  <img src={mindImg} alt="" className="ability__img"></img>
                </div>
                <div className="service__meta">
                  <h1 className="service__text">인성</h1>
                  <p className="p service__text p__color">부모님 댁에 얹혀 살며</p>
                  <p className="p service__text p__color">매 끼 항시 반찬 투정</p>
                  <p className="p service__text p__color">퇴근마다 탕비실 과자 갈취</p>
                </div>
              </div>
            </div>

            <div className="col__3__40">
              <div className="service__box pointer">
                <div className="icon">
                  <img src={healthImg} alt="" className="ability__img"></img>
                </div>
                <div className="service__meta">
                  <h1 className="service__text">건강</h1>
                  <p className="p service__text p__color">흡연 20년차 폐암 초기</p>
                  <p className="p service__text p__color">체지방률 45% 달성</p>
                  <p className="p service__text p__color">인바디 점수 20점 달성</p>
                </div>
              </div>
            </div>

            <div className="col__3__40">
              <div className="service__box pointer">
                <div className="icon">
                  <img src={dreamImg} alt="" className="ability__img"></img>
                </div>
                <div className="service__meta">
                  <h1 className="service__text">꿈</h1>
                  <p className="p service__text p__color">매일 10시간 수면</p>
                  <p className="p service__text p__color">가끔 가위 눌림</p>
                  <p className="p service__text p__color">하루하루 생존이 목표</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forties_jeon_sad;
