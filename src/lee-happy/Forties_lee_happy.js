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
            <div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                <img src={moneyImg} alt="" className="ability__img"></img>
                </div>
                <div className="service__meta">
                  <h1 className="service__text">돈</h1>
                  <p className="p service__text p__color">sleeping sleeping</p>
                  <p className="p service__text p__color">eating eating</p>
                  <p className="p service__text p__color">coding coding</p>
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
                  <p className="p service__text p__color">sleeping sleeping</p>
                  <p className="p service__text p__color">eating eating</p>
                  <p className="p service__text p__color">coding coding</p>
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
                  <p className="p service__text p__color">sleeping sleeping</p>
                  <p className="p service__text p__color">eating eating</p>
                  <p className="p service__text p__color">coding coding</p>
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
                  <p className="p service__text p__color">sleeping sleeping</p>
                  <p className="p service__text p__color">eating eating</p>
                  <p className="p service__text p__color">coding coding</p>
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
                  <p className="p service__text p__color">sleeping sleeping</p>
                  <p className="p service__text p__color">eating eating</p>
                  <p className="p service__text p__color">coding coding</p>
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
                  <p className="p service__text p__color">sleeping sleeping</p>
                  <p className="p service__text p__color">eating eating</p>
                  <p className="p service__text p__color">coding coding</p>
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
