import React from "react";
import "../css/Service.css";
import "../css/App.css";
import statusImg from '../img/status.png'
import moneyImg from '../img/money.png'
import peopleImg from '../img/people.png'
import mindImg from '../img/mind.png'
import healthImg from '../img/health.png'
import dreamImg from '../img/dream.png'

function Forties_jeon_happy() {
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
            <div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                <img src={moneyImg} alt="" className="ability__img"></img>
                </div>
                <div className="service__meta">
                  <h1 className="service__text">돈</h1>
                  <p className="p service__text p__color">자산 48조 보유</p>
                  <p className="p service__text p__color">청담, 서초 자이 건물 인수</p>
                  <p className="p service__text p__color">세계 부자 순위 5등 정착</p>
                </div>
              </div>
            </div>

            <div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                <img src={peopleImg} alt="" className="ability__img"></img>
                </div>
                <div className="service__meta">
                  <h1 className="service__text">사람</h1>
                  <p className="p service__text p__color">굉장한 가정을 꾸려</p>
                  <p className="p service__text p__color">한국 결혼률 증가에 대폭 기여</p>
                  <p className="p service__text p__color">장병규 의장님과 의형제 결의</p>
                </div>
              </div>
            </div>

            
            <div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                <img src={statusImg} alt="" className="ability__img"></img>
                </div>
                <div className="service__meta">
                  <h1 className="service__text">지위</h1>
                  <p className="p service__text p__color">카카오 인수 합병 성공</p>
                  <p className="p service__text p__color">포브스 선정 세계 50대 기업</p>
                  <p className="p service__text p__color">구미 이준 연구단지 건설</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col__1">
          <div className="row">
            <div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <img src={mindImg} alt="" className="ability__img"></img>
                </div>
                <div className="service__meta">
                  <h1 className="service__text">인성</h1>
                  <p className="p service__text p__color">카이스트 몰입캠프 14억 후원</p>
                  <p className="p service__text p__color">아프리카 학교설립 적극 지원</p>
                  <p className="p service__text p__color">길가던 할머니 도움경력 400번</p>
                </div>
              </div>
            </div>

            <div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <img src={healthImg} alt="" className="ability__img"></img>
                </div>
                <div className="service__meta">
                  <h1 className="service__text">건강</h1>
                  <p className="p service__text p__color">보디빌더 준비중</p>
                  <p className="p service__text p__color">40년간 코로나 한 번도 안걸림</p>
                  <p className="p service__text p__color">자식들을 위해 금연 성공</p>
                </div>
              </div>
            </div>

            <div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <img src={dreamImg} alt="" className="ability__img"></img>
                </div>
                <div className="service__meta">
                  <h1 className="service__text">꿈</h1>
                  <p className="p service__text p__color">25살 아쉽게 포기했었던</p>
                  <p className="p service__text p__color">몰입캠프 3주차 웹사이트</p>
                  <p className="p service__text p__color">다시 도전해 보기</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forties_jeon_happy;
