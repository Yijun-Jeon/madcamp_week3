import React,{useState} from "react";
import "./css/Home.css";
import logo from "./img/logo.png";

import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import Project from './Project';
import Service from './Service';
import AboutLee from "./AboutLee";

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
              <a href="#Services">
                <li className="nav__items mx__15">Services</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">Portfolio</li>
              </a>
              <a href="#Blog">
                <li className="nav__items mx__15">Blog</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Constact</li>
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
                        <a href="#Services">Services</a>
                    </li>
                    <li className="sideNavbar">
                        <a href="#Portfolio">Portfolio</a>
                    </li>
                    <li className="sideNavbar">
                        <a href="#Blog">Blog</a>
                    </li>
                    <li className="sideNavbar">
                        <a href="#Contact">Contact</a>
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
      {happy?
      <BindKeyboardSwipeableViews enableMouseEvents>
        <div style={Object.assign({})}>
          <About/>
        </div>
        <div style={Object.assign({})}>
          <About/>
        </div>
      </BindKeyboardSwipeableViews> :
      <BindKeyboardSwipeableViews enableMouseEvents>
        <div style={Object.assign({})}>
          <About/>
        </div>
        <div style={Object.assign({})}>
          <About/>
        </div>
      </BindKeyboardSwipeableViews>}
      
      
      {happy ? 
      <BindKeyboardSwipeableViews enableMouseEvents>
        <div style={Object.assign({})}>
          <Service/>
        </div>
        <div style={Object.assign({})}>
          <Service/>
        </div>
      </BindKeyboardSwipeableViews> :
      <BindKeyboardSwipeableViews enableMouseEvents>
        <div style={Object.assign({})}>
          <Service/>
        </div>
        <div style={Object.assign({})}>
          <Service/>
        </div>
      </BindKeyboardSwipeableViews>}
      
      {happy ? 
      <BindKeyboardSwipeableViews enableMouseEvents>
        <div style={Object.assign({})}>
          <Project/>
        </div>
        <div style={Object.assign({})}>
          <Project/>
        </div>
      </BindKeyboardSwipeableViews> :
      <BindKeyboardSwipeableViews enableMouseEvents>
        <div style={Object.assign({})}>
          <Project/>
        </div>
        <div style={Object.assign({})}>
          <Project/>
        </div>
      </BindKeyboardSwipeableViews>}

      {happy ? 
      <BindKeyboardSwipeableViews enableMouseEvents>
        <div style={Object.assign({})}>
          <Blog/>
        </div>
        <div style={Object.assign({})}>
          <Blog/>
        </div>
      </BindKeyboardSwipeableViews> : 
      <BindKeyboardSwipeableViews enableMouseEvents>
        <div style={Object.assign({})}>
          <Blog/>
        </div>
        <div style={Object.assign({})}>
          <Blog/>
        </div>
      </BindKeyboardSwipeableViews>}

      {happy ? 
      <BindKeyboardSwipeableViews enableMouseEvents>
        <div style={Object.assign({})}>
          <Contact/>
        </div>
        <div style={Object.assign({})}>
          <Contact/>
        </div>
      </BindKeyboardSwipeableViews> :
      <BindKeyboardSwipeableViews enableMouseEvents>
        <div style={Object.assign({})}>
          <Contact/>
        </div>
        <div style={Object.assign({})}>
          <Contact/>
        </div>
      </BindKeyboardSwipeableViews>}
      <Footer/>

    </div>
  );
}

export default Home;
