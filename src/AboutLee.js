import React from "react";
import "./css/AboutLee.css";
import aboutImg from "./img/leehello2.png";

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
            <h1 className="about__heading">About me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                10대: 유복한 집안에서 성장 후 성균관대학교 논술 입학
              </p>
              <p className="about__text p__color">
                20대: 몰입캠프 수강 후 정보 선생님으로 진로 결정
                <p className="about__text p__color">-25세: 서울 중등 임용 수석 선발</p>

                  
              </p>
              <p className="about__text p__color">
                wiggle wiggle wiggle wiggle
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Download Cvc</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
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
      </div>
    </div>
  );
}

export default About;
