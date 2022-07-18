import React from 'react'
import "../css/Earth.css";
import Planetogether from '../img/planetogether.png'
import JeonMoving from '../img/oldjeon2.gif'
import LeeMoving from '../img/oldlee2.gif'
import JeonSign from '../img/jeonsign2.png'
import LeeSign from '../img/leesign2.png'

function Sixties_jeon_happy() {

  function stars() {
    const count = 800;
    const section = document.querySelector('.starlight');
    var i = 0;


    while (i < count) {
        const star = document.createElement('i');
        const x = Math.floor(Math.random() * window.innerWidth)
        const y = Math.floor(Math.random() * window.innerHeight)


        const size = Math.random() * 4;
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = 1 + size + 'px';
        star.style.height = 1 + size + 'px';

        const duration = Math.random() * 2;
        star.style.animationDuration = 2 + duration + 's';
        star.style.animationDelay = duration + 's';
        section.appendChild(star);
        i++
    }
}

// stars();
  return (
    <div className='sixties_happy component__space' id="60s">
      <div className="heading">
            <h1 className="heading">60대</h1>
        </div>
      <body className="sixties__body">
      <div className="earth__container"></div>
      {/* <div className="starlight"></div> */}
      <div className='plane'>
        <img src = {Planetogether}></img>

      </div>
      <div className="earth__explaining__container">
        <img src={JeonMoving}  alt="" className="jeon__move" />
      <div className="earth__explain">
        안녕하세요 제이름너아리넝ㅁ리ㅏ먼이;럼ㄴ;ㅇ리ㅏ먼아ㅣㄹㅊ느안ㄹ어ㅏㄴㅇ러ㅑㄴ렂댜런댠러
      </div>
      <img src={JeonSign} alt="" className="sign" />
      </div>

      <div className="earth__explaining__container__right">
        <img src={LeeMoving}  alt="" className="lee__move" />
      <div className="earth__explain">
      ﻿곱고 희던 두 손으로
넥타이를 메어 주던 때
어렴풋이 생각나오
여보 그때를 기억하오
막내 아들 대학시험
뜬눈으로 지내던 밤들
어렴풋이 생각나오
여보 그때를 기억하오
세월은 그렇게 흘러
여기까지 왔는데
인생은 그렇게 흘러
황혼에 기우는데
큰 딸아이 결혼식날
흘리던 눈물 방울이
이제는 모두 말라
여보 그 눈물을 기억하오
세월이 흘러감에
흰머리가 늘어가네
모두 다 떠난다고
여보 내손을 꼭 잡았소
세월은 그렇게 흘러
여기까지 왔는데
인생은 그렇게 흘러
황혼에 기우는데
다시 못올 그 먼길을
어찌 혼자 가려하오
여기 날 홀로 두고
여보 왜 한마디 말이 없소
여보 안녕히 잘 가시게
여보 안녕히 잘 가시게
여보 안녕히 잘 가시게
      속세를 벗어나 제주도 함덕 해수욕장 앞 땅 매입 후 카페 사장으로 여생을 즐김 
      </div>
      <img src={LeeSign} alt="" className="sign" />

      </div>
      
      </body>
        
    </div>
  )
}

export default Sixties_jeon_happy