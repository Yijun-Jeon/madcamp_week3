import React from 'react'
import oldboys from '../img/oldboys_1.jpg'
import "../css/About.css";

function Sixties_jeon_sad() {
  return (
    <div className="about component__space" id="60s">
    <div className="container">
      <div className="row">
        <div className="col__2">
          <img src={oldboys} alt="" className="old__img"></img>
        </div>
        <div className="col__2">
          <h1 className="about__heading">60대</h1>
          <div className="about__meta">
            <p className="about__text six__color">
              출소 후 전과와 늙은 나이로 인해 취업 불가능
            </p>
            <p className="about__text six__color">
              마지막 도전으로 개발자로서의 진로 결정
            </p>
            <p className="about__text six__color">
              대학 새로 진학 후 65세의 최고령 나이에
            </p>
            <p className="about__text six__color">
              카이스트 몰입캠프 참여 서로 또 룸메가 됨
            </p>
            <div className="about__button d__flex align__items__center">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Sixties_jeon_sad