import React from 'react'
import '../css/Contact.css'
import contactImg from '../img/oldlee.jpg'

function Seventies_lee_happy() {
  return (
    <div className='contact component__space' id="Contact">
        <div className="row">
            <div className="col__2">
                <div className="contact__box">
                    <div className="contact__meta">
                        <h1 className="hire__text">Contact Me.</h1>
                        <p className="hire__text white">도움과 조언이 필요하다면 서슴없이 연락주십시오.</p>
                        <p className="hire__text white"><strong>+010-2605-0841</strong> or github <strong>https://github.com/leeyjwinter</strong></p>
                    </div>
                    <div className="input__box">
                        <input type="text" className="contact name" placeholder='이름 *'/>
                        <input type="text" className="contact email" placeholder='전화번호 *'/>
                        <input type="text" className="contact subject" placeholder='상담주제'/>
                        <textarea name="message" id="message" placeholder='메시지'></textarea>
                        <button className="btn contact pointer" type="submit" onClick={()=>{
                            window.open('https://github.com/leeyjwinter')
                        }}>Contact</button>
                    </div>
                </div>
            </div>
            <div className="col__2">
                <img src={contactImg} alt="" className="contact__img" />
            </div>
        </div>
    </div>
  )
}

export default Seventies_lee_happy