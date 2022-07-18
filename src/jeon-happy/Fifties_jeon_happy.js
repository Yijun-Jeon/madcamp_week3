import React from 'react';
import '../css/Blog.css';
import Blog1 from '../img/news.PNG';
import Blog2 from '../img/jang_jeon.jpg';
import Blog3 from '../img/book.png';

function Fifties_jeon_happy() {
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
                            <h4 className="project__text">이준극락사</h4>
                            <h4 className="project__text">포브스 선정 세계 11위 기업 등극</h4>
                            <a className="blog project__btn btn" type='submit' onClick={()=>{
                                window.open('https://www.news1.kr/articles/?4306712')
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
                            <h4 className="project__text">장병규 의장 & 전이준 회장</h4>
                            <h4 className="project__text">글로벌 몰입 위원회 창설</h4>
                            <a className="blog project__btn btn" onClick={()=>{
                                window.open('https://m.news1.kr/articles/?3111369');
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
                            <h4 className="project__text">수필 출간하여</h4>
                            <h4 className="project__text">역대 베스트셀러 최고 매출 갱신</h4>
                            <a className="blog project__btn btn" onClick={()=>{
                                window.open('https://www.creativosonline.org/ko/portadas-de-libros.html')
                            }}>Read More</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Fifties_jeon_happy