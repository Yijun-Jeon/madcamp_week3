import React from 'react';
import '../css/Blog.css';
import Blog3 from '../img/school.jpg';
import Blog2 from '../img/booja.jpg';
import Blog1 from '../img/teacher.PNG';

function Fifties_lee_happy() {
  return (
    <div className='blog component__space' id='fifties'>
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
                            <h5 className="project__text"  style={{fontWeight:'bold'}}>52세</h5>
                            <h4 className="project__text">인강과 병행한 탈모 사업 대성공</h4>
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
                            <h5 className="project__text" style={{fontWeight:'bold', color:'black'}}>55세</h5>
                            <h4 className="project__text" style={{fontWeight:'bold', color:'black' }}>자녀들의 nft 사업 성공, 2052년 포브스 선정 세계 억만장자 리스트 1,2위에 등극</h4>
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
                            <h5 className="project__text" style={{fontWeight:'bold'}}>58세</h5>
                            <h4 className="project__text">기근으로 고통받는 지역에 ‘이영준학교’ 설립</h4>
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