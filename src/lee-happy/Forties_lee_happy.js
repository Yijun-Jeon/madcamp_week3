import React from "react";
import "../css/Service.css";
import "../css/App.css";
import statusImg from '../img/status.png'
import moneyImg from '../img/money.png'
import peopleImg from '../img/people.png'
import mindImg from '../img/mind.png'
import healthImg from '../img/health.png'
import dreamImg from '../img/dream.png'

function Forties_lee_happy() {
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
                  <p className="p service__text p__color">대성 마이맥</p>
                  <p className="p service__text p__color">정보 강사 부문</p>
                  <p className="p service__text p__color">1타 등극</p>
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
                  <p className="p service__text p__color">스승의 날마다 찾아오는</p>
                  <p className="p service__text p__color">전국의 학생들로 인하여</p>
                  <p className="p service__text p__color">카네이션 농가 활성화 기여</p>
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
                  <p className="p service__text p__color">이영준 성공기를 담은</p>
                  <p className="p service__text p__color">넷플릭스 오리지널 시리즈</p>
                  <p className="p service__text p__color">시청자 수 1위 달성</p>
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
                  <p className="p service__text p__color">폭행범 제압으로</p>
                  <p className="p service__text p__color">서울시로부터</p>
                  <p className="p service__text p__color">용감한 시민상 수여</p>
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
                  <p className="p service__text p__color">필라테스 강사</p>
                  <p className="p service__text p__color">자격증 획득</p>
                  <p className="p service__text p__color">피지컬갤러리 고정 출연</p>
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
                  <p className="p service__text p__color">전세계의 어린이를 돌보며</p>
                  <p className="p service__text p__color">전 재산을 환원하고</p>
                  <p className="p service__text p__color">가난하게 죽는 것이 꿈</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forties_lee_happy;