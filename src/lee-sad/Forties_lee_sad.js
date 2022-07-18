import React from "react";
import "../css/Service.css";
import statusImg from '../img/status_sad.png'
import moneyImg from '../img/money_sad.png'
import peopleImg from '../img/people_sad.png'
import mindImg from '../img/mind_sad.png'
import healthImg from '../img/health_sad.png'
import dreamImg from '../img/dream_sad.png'

function Forties_lee_sad() {
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
                  <p className="p service__text p__color">몰입캠프 프로젝트로 출시된</p>
                  <p className="p service__text p__color">주식투자 알고리즘 사용</p>
                  <p className="p service__text p__color">전 재산 투자 후 탕진</p>
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
                  <p className="p service__text p__color">몰입캠프 20주년 기념</p>
                  <p className="p service__text p__color">계룡산에 MT 개최</p>
                  <p className="p service__text p__color">전이준 제외 전원 불참</p>
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
                  <p className="p service__text p__color">자녀들의 호칭</p>
                  <p className="p service__text p__color">아빠가 아닌</p>
                  <p className="p service__text p__color">영준쓰로 통일</p>
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
                  <p className="p service__text p__color">밥에 있는 콩 골라먹음</p>
                  <p className="p service__text p__color">오락실 가고싶어</p>
                  <p className="p service__text p__color">어머님께 5000원 요구</p>
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
                  <p className="p service__text p__color">이스포츠 제외</p>
                  <p className="p service__text p__color">운동과 단절</p>
                  <p className="p service__text p__color">BMI 최고치 달성</p>
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
                  <p className="p service__text p__color">학교 점심시간에 </p>
                  <p className="p service__text p__color">코다리강정 두번 받는 것이</p>
                  <p className="p service__text p__color">유일한 꿈</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forties_lee_sad;
