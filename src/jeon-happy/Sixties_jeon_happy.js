import React from 'react'
import "../css/Earth.css";
import Planetogether from '../img/planetogether.png'


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
            <p className="heading p__color">행복한 말년</p>
            <p className="heading p__color">기나긴 평화</p>
        </div>
      <body className="sixties__body">
      <div className="earth__container"></div>
      {/* <div className="starlight"></div> */}
      <div className='plane'>
        <img src = {Planetogether}></img>

      </div>
      </body>
        
    </div>
  )
}

export default Sixties_jeon_happy