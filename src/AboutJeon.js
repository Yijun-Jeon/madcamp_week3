import React from "react";
import "./css/About.css";
import aboutImg from "./img/junhello.png";

function About() {

    window.addEventListener("scroll",function(){
        const upToTop = document.querySelector("a.bottom__to__top");
        upToTop.classList.toggle("active",window.scrollY > 0);
    })

// Up To Top Btn
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img"></img>
          </div>
          <div className="col__2">
            <h1 className="about__heading">전 이 준</h1>
            <div className="about__meta">
              <p className="about__text p__text">
                1998년 8월 13일 경상북도 구미시 출생
              </p>
              <p className="about__text p__text">
              10대: 화목한 가정에서 성장하여 성균관대학교 글로벌 경영학과에 입학
              </p>
              <p className="about__text p__text">
              20대: 경영에 흥미를 잃고 소프트웨어 복수전공을 시작
              </p>
              <p className="about__text p__text">
              25세: 몰입캠프 수강 중 벽을 느껴서 경영에 매진하기로 결심
              </p>
              {/* <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Download Cvc</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      {/* <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16" 
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div> */}
    </div>
  );
}

export default About;
