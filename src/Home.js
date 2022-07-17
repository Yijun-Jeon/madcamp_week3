import React,{useState} from "react";
import "./css/Home.css";
import logo from "./img/logo.png";

import AboutJeon from './AboutJeon';
import AboutLee from './AboutLee';
// import If from './If';

// Jeon - happy
import Forties_jeon_happy from './jeon-happy/Forties_jeon_happy';
import Fifties_jeon_happy from './jeon-happy/Fifties_jeon_happy';
import Sixties_jeon_happy from './jeon-happy/Sixties_jeon_happy';
import Seventies_jeon_happy from './jeon-happy/Seventies_jeon_happy';
import Stair_jeon_happy from './jeon-happy/Stair_jeon_happy';

// Jeon - sad
import Forties_jeon_sad from './jeon-sad/Forties_jeon_sad';
import Fifties_jeon_sad from './jeon-sad/Fifties_jeon_sad';
import Sixties_jeon_sad from './jeon-sad/Sixties_jeon_sad';
import Seventies_jeon_sad from './jeon-sad/Seventies_jeon_sad';
import Stair_jeon_sad from './jeon-sad/Stair_jeon_sad';

// Lee - happy
import Forties_lee_happy from './lee-happy/Forties_lee_happy';
import Fifties_lee_happy from './lee-happy/Fifties_lee_happy';
import Sixties_lee_happy from './lee-happy/Sixties_lee_happy';
import Seventies_lee_happy from './lee-happy/Seventies_lee_happy';
import Stair_lee_happy from './lee-happy/Stair_lee_happy';

// Lee - sad
import Forties_lee_sad from './lee-sad/Forties_lee_sad';
import Fifties_lee_sad from './lee-sad/Fifties_lee_sad';
import Sixties_lee_sad from './lee-sad/Sixties_lee_sad';
import Seventies_lee_sad from './lee-sad/Seventies_lee_sad';
import Stair_lee_sad from './lee-sad/Stair_lee_sad';

import Footer from './Footer';

import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  //Toggle Menu
  const [show,setShow] = useState(false);

  // Tab
  const [happy,setHappy] = useState(true);

  return (
    
    <div className="home" id="Home">
      <div className={happy? 'home__bg' : 'home__bg__sad'}>
        <div className={happy? 'home__img' : 'home__img__sad'}>
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Stair">
                <li className="nav__items mx__15">25~30대</li>
              </a>
              <a href="#40s">
                <li className="nav__items mx__15">40대</li>
              </a>
              <a href="#50s">
                <li className="nav__items mx__15">50대</li>
              </a>
              <a href="#60s">
                <li className="nav__items mx__15">60대</li>
              </a>
              <a href="#70s">
                <li className="nav__items mx__15">70대</li>
              </a>
            </ul>

          </div>
          {/* Toggle Menu */}
          <div className="toggle__menu">
            <a href="#" onClick={()=>{setHappy(true)}}>
              <ul className="nav__items mx__15">극락</ul>
            </a>
            <a href="#" onClick={()=>{setHappy(false)}}>
              <ul className="nav__items mx__15">절망</ul>
            </a>
            <svg onClick={()=> setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
                <ul className="sidebar d__flex">
                    <li className="sideNavbar">
                        <a href="#Home">Home</a>
                    </li>
                    <li className="sideNavbar">
                        <a href="#About">About</a>
                    </li>
                    <li className="sideNavbar">
                        <a href="#Stair">25~30대</a>
                    </li>
                    <li className="sideNavbar">
                        <a href="#40s">40대</a>
                    </li>
                    <li className="sideNavbar">
                        <a href="#50s">50대</a>
                    </li>
                    <li className="sideNavbar">
                        <a href="#60s">60대</a>
                    </li>
                    <li className="sideNavbar">
                        <a href="#70s">70대</a>
                    </li>
                </ul>
            </div>) : null}
        </div> 
        {/* Home Content */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">Welcome Kaist</h1>
              <h2 className="home__text pz__10">Hi, i'm Jeon</h2>
              <h3 className="home__text sweet pz__10">Baek Soo.</h3>
              <h4 className="home__text pz__10">Hungry Now</h4>
            </div>
          </div>
        </div>
      </div>
      </div>

      <BindKeyboardSwipeableViews enableMouseEvents>
        <div style={Object.assign({})}>
          <AboutJeon/>
        </div>
        <div style={Object.assign({})}>
          <AboutLee/>
        </div>
      </BindKeyboardSwipeableViews>
      
      
      {happy ? 
      <BindKeyboardSwipeableViews enableMouseEvents>
        <div style={Object.assign({})}>
          {/* 25~30대 happy - Jeon */}
          <Stair_jeon_happy/>
        </div>
        <div style={Object.assign({})}>
          {/* 25~30대 happy - Lee */}
          <Stair_lee_happy/>
        </div>
      </BindKeyboardSwipeableViews> :
      <BindKeyboardSwipeableViews enableMouseEvents>
        <div style={Object.assign({})}>
          {/* 25~30대 sad - Jeon */}
          <Stair_jeon_sad/>
        </div>
        <div style={Object.assign({})}>
          {/* 25~30대 sad - Lee */}
          <Stair_lee_sad/>
        </div>
      </BindKeyboardSwipeableViews>}
      
      {happy ? 
      <BindKeyboardSwipeableViews enableMouseEvents>
        <div style={Object.assign({})}>
          {/* 40대 happy - Jeon */}
          <Forties_jeon_happy/>
        </div>
        <div style={Object.assign({})}>
          {/* 40대 happy - Lee */}
          <Forties_lee_happy/>
        </div>
      </BindKeyboardSwipeableViews> :
      <BindKeyboardSwipeableViews enableMouseEvents>
        <div style={Object.assign({})}>
          {/* 40대 sad - Jeon */}
          <Forties_jeon_sad/>
        </div>
        <div style={Object.assign({})}>
          {/* 40대 sad - Lee */}
          <Forties_lee_sad/>
        </div>
      </BindKeyboardSwipeableViews>}

      {happy ? 
      <BindKeyboardSwipeableViews enableMouseEvents>
        <div style={Object.assign({})}>
          {/* 50대 happy - Jeon */}
          <Fifties_jeon_happy/>
        </div>
        <div style={Object.assign({})}>
          {/* 50대 happy - Lee */}
          <Fifties_lee_happy/>
        </div>
      </BindKeyboardSwipeableViews> : 
      <BindKeyboardSwipeableViews enableMouseEvents>
        <div style={Object.assign({})}>
          {/* 50대 sad - Jeon */}
          <Fifties_jeon_sad/>
        </div>
        <div style={Object.assign({})}>
          {/* 50대 sad - Lee */}
          <Fifties_lee_sad/>
        </div>
      </BindKeyboardSwipeableViews>}

      {happy ? 
      <BindKeyboardSwipeableViews enableMouseEvents>
        <div style={Object.assign({})}>
          {/* 60대 happy - Jeon */}
          <Sixties_jeon_happy/>
        </div>
        <div style={Object.assign({})}>
          {/* 60대 happy - Lee */}
          <Sixties_lee_happy/>
        </div>
      </BindKeyboardSwipeableViews> : 
      <BindKeyboardSwipeableViews enableMouseEvents>
        <div style={Object.assign({})}>
          {/* 60대 sad - Jeon */}
          <Sixties_jeon_sad/>
        </div>
        <div style={Object.assign({})}>
          {/* 60대 sad - Lee */}
          <Sixties_lee_sad/>
        </div>
      </BindKeyboardSwipeableViews>}

      {happy ? 
      <BindKeyboardSwipeableViews enableMouseEvents>
        <div style={Object.assign({})}>
          {/* 70대 happy - Jeon */}
          <Seventies_jeon_happy/>
        </div>
        <div style={Object.assign({})}>
          {/* 70대 happy - Lee */}
          <Seventies_lee_happy/>
        </div>
      </BindKeyboardSwipeableViews> :
      <BindKeyboardSwipeableViews enableMouseEvents>
        <div style={Object.assign({})}>
          {/* 70대 sad - Jeon */}
          <Seventies_jeon_sad/>
        </div>
        <div style={Object.assign({})}>
          {/* 70대 sad - Lee */}
          <Seventies_lee_sad/>
        </div>
      </BindKeyboardSwipeableViews>}
      <Footer/>

    </div>
  );
}

export default Home;
