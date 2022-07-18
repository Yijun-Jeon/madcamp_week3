import React from 'react';
import '../css/Blog.css';
import Blog1 from '../img/prison_lee.png';
import Blog2 from '../img/leemoneysteal.png';
import Blog3 from '../img/prison_fight2.jpg';

function Fifties_lee_sad() {
  return (
    <div className='blog component__space' id='50s'>
        <div className="heading">
            <h1 className="heading">50대</h1>
            <p className="heading p__color">I didn't nothing</p>
            <p className="heading p__color">I didn't nothing</p>
        </div>
        <div className="container">
            <div className="row">

            <div className="col__3">
                    <div className="project__box cursor relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Blog2} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="Blog__meta absolute">
                            <h5 className="project__text">Development</h5>
                            <h4 className="project__text">Apple Banana Candy Duck</h4>
                            <a onClick = {()=>{
                                window.open("https://m.hani.co.kr/arti/area/capital/1043225.html")
                            }}className="blog project__btn btn">Read More</a>
                        </div>
                    </div>
                </div>



                <div className="col__3">
                    <div className="project__box cursor relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Blog1} alt="" className="project__img"/>
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="Blog__meta absolute">
                            <h5 className="project__text">Development</h5>
                            <h4 className="project__text">Apple Banana Candy Duck</h4>
                            <a onClick = {()=>{
                                window.open("https://www.123rf.com/photo_179582359_prisoner-with-mugshot-letter-board-at-police-department.html?vti=nklnzwkvfu0ethg3uy-1-5")
                            }} className="blog project__btn btn">Read More</a>
                        </div>
                    </div>
                </div>

                

                <div className="col__3">
                    <div className="project__box cursor relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Blog3} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="Blog__meta absolute">
                            <h5 className="project__text">Development</h5>
                            <h4 className="project__text">Apple Banana Candy Duck</h4>
                            <a onClick = {()=>{
                                window.open("https://m.blog.naver.com/palette25/221855532035")
                            }} className="blog project__btn btn">Read More</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Fifties_lee_sad