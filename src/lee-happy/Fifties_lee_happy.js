import React from 'react';
import '../css/Blog.css';
import Blog3 from '../img/school.jpg';
import Blog2 from '../img/booja.jpg';
import Blog1 from '../img/teacher.PNG';

function Fifties_lee_happy() {
  return (
    <div className='blog component__space' id='50s'>
        <div className="heading">
            <h1 className="heading">50대</h1>
        </div>
        <div className="container">
            <div className="row">
                <div className="col__3">
                    <div className="project__box cursor relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Blog1} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="Blog__meta absolute">
                            <h5 className="project__text">Development</h5>
                            <h4 className="project__text">Apple Banana Candy Duck</h4>
                            <a className="blog project__btn btn" onClick={()=>{
                                window.open('https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=1mokiss&logNo=221766520972')
                            }}>Read More</a>
                        </div>
                    </div>
                </div>

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
                            <a className="blog project__btn btn" onClick={()=>{
                                window.open('https://www.instiz.net/pt/6908333')
                            }}>Read More</a>
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
                            <a className="blog project__btn btn" onClick={()=>{
                                window.open('http://jtntv.kr/mission_news/257578')
                            }}>Read More</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Fifties_lee_happy