import React from 'react';
import '../css/Blog.css';
import Blog2 from '../img/prison_jeon.png';
import Blog1 from '../img/news_sad.PNG';
import Blog3 from '../img/solo.jpg';

function Fifties_jeon_sad() {
  return (
    <div className='blog component__space' id='fifties'>
        <div className="heading">
            <h1 className="heading">50대</h1>
            {/* <p className="heading p__color">10년만에 출소하였으나</p>
            <p className="heading p__color">전과와 늙은 나이로 인해 취업 불가능</p> */}
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
                            <h4 className="project__text">횡령사실 발각</h4>
                            <h4 className="project__text">부장과 같이 해고</h4>
                            <a className="blog project__btn btn" onClick={()=>{
                                window.open("https://m.hankookilbo.com/News/Read/A2022071811470005505")
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
                            <h4 className="project__text">징역 10년 선고</h4>
                            <a className="blog project__btn btn" onClick={()=>{
                                window.open('https://www.123rf.com/photo_179582359_prisoner-with-mugshot-letter-board-at-police-department.html?vti=nklnzwkvfu0ethg3uy-1-5')
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
                            <h4 className="project__text">관심 수감자 등극</h4>
                            <h4 className="project__text">징벌방 독방 사용</h4>
                            <a href="#" className="blog project__btn btn" onClick={()=>{
                                window.open('https://www.donga.com/news/View?gid=81046301&date=20161028')
                            }}>Read More</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Fifties_jeon_sad