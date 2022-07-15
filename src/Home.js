import React,{useState} from "react";
import "./Home.css";
import logo from "./img/logo.png";

import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import Project from './Project';
import Service from './Service';

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
      <div className="{happy}? home__bg : home__bg__sad">
        <div className="{happy}? home__img : home__img__sad">
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

              <a href="#" onClick={()=>{setHappy(true)}}>
                <li className="nav__items mx__15">극락</li>
              </a>
              <a href="#" onClick={()=>{setHappy(false)}}>
                <li className="nav__items mx__15">절망</li>
              </a>
            </ul>

          </div>
          {/* Toggle Menu */}
          <div className="toggle__menu">
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
      {happy && <About/>}
      {!happy && <Service/>}

      {happy && <Service/>}
      {!happy && <About/>}

      {happy && <Project/>}
      {!happy && <Project/>}

      {happy && <Blog/>}
      {!happy && <Blog/>}
      
      {happy && <Contact/>}
      {!happy && <Contact/>}
      
      {happy && <Footer/>}
      {happy && <Footer/>}

    </div>
  );
}

export default Home;
