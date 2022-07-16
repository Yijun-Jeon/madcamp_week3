import React from 'react';
import '../css/Blog.css';
import Blog1 from '../img/blog-01.jpg';
import Blog2 from '../img/blog-02.jpg';
import Blog3 from '../img/blog-03.jpg';

function Fifties_jeon_happy() {
  return (
    <div className='blog component__space' id='Blog'>
        <div className="heading">
            <h1 className="heading">Latest News</h1>
            <p className="heading p__color">I didn't nothing</p>
            <p className="heading p__color">I didn't nothing</p>
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
                            <a href="#" className="blog project__btn btn">Read More</a>
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
                            <a href="#" className="blog project__btn btn">Read More</a>
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
                            <a href="#" className="blog project__btn btn">Read More</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Fifties_jeon_happy