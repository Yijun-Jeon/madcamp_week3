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
        안녕하세요 전이준 회장입니다. 저는 회장직을 직원에게 물려주고 싶었으나 아쉽게도 자식들이 선수를 쳐버렸습니다. 제가 여기까지 올 수 있었던
        이유는 제가 잘나서가 아니라 모두 여러분의 열화와 같은 성원과 주변 사람들의 사랑 덕분이라고 생각합니다. 여러분! 한가지만 명심하십시오, 빠른 포기는
        아름답습니다. 앞으로 저는 아쉽지만 속세를 떠나 남은 여생을 즐기려 합니다. 내일부터 영준이와 세계여행을 끝마치고 제주도에 이준네 민박을 오픈할 예정입니다.
        영준네 카페와 협업하여 오픈 이벤트를 마련할 예정이니 많은 방문 부탁드립니다.
      </div>
      <img src={JeonSign} alt="" className="sign" />
      </div>

      <div className="earth__explaining__container__right">
        <img src={LeeMoving}  alt="" className="lee__move" />
      <div className="earth__explain">
      안녕하세요 여러분 교사, 강사, 회장, 아버지 이영준입니다.
      이제는 저를 위한 삶을 한 번 살아볼 생각입니다.
      저의 재산은 사회에 모두 환원하였고, 현재는 이준이와 함께 인도네시아 발리 해변에서
      일광욕을 즐기고 있습니다.여러분들도 자신의 꿈을 좇아 열심히 노력을 하다보면
      분명 저만큼 훌륭한 사람으로 거듭나실 수 있을 것입니다. 아닐지도.
      그리고 몰입캠프는 꼭 참여할 것을 권해드립니다.
      몰입캠프가 아니었다면 저는 여기까지 오지 못했을 것입니다. 라고 할뻔.
      이제 저는 제주도에 땅을 매입해 카페 사장으로서 남은 삶을 살 것 같습니다. 
      언제든 도움이 필요하면 저의 깃 주소나 전화로 연락 주십시오.
      </div>
      <img src={LeeSign} alt="" className="sign" />

      </div>
      
      </body>
        
    </div>
  )
}

export default Sixties_jeon_happy