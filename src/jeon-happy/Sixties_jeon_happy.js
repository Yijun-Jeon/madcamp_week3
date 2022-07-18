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
      안녕하세요 여러분 교사, 강사, 회장, 아버지 이영준입니다.
      예순이 되기까지 정말 많은 분들에게 도움을 받고 도움을 주며
      마더 테레사와 같은 삶을 살아왔습니다.
      이제는 저를 위한 삶을 한 번 살아볼 생각입니다.
      저의 재산은 사회에 모두 환원하였고, 현재는 이준이와 함께 인도네시아 발리 해변에서
      일광욕을 즐기고 있습니다.
      여러분 세상은 아름답습니다. 여러분들도 자신의 꿈을 좇아 열심히 노력을 하다보면
      분명 저만큼 훌륭한 사람으로 거듭나실 수 있을 것입니다. 아닐지도.
      그리고 몰입캠프는 꼭 참여할 것을 권해드립니다.
      몰입캠프가 아니었다면 저는 여기까지 오지 못했을 것입니다. 라고 할뻔.
      이제 저는 제주도에 땅을 매입해 카페 사장으로서 남은 삶을 살 것 같습니다. 
      언제든 도움이 필요하면 저의 깃 주소나 전화로 연락 주십시오.
      고맙습니다, 사랑하세요.
      </div>
      <img src={LeeSign} alt="" className="sign" />

      </div>
      
      </body>
        
    </div>
  )
}

export default Sixties_jeon_happy