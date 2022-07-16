import React from 'react'
import '../css/Contact.css'
import contactImg from '../img/portrait_jeon.png'

function Seventies_jeon_sad() {
  return (
    <div className='contact component__space' id="Contact">
        <div className="row">
            <div className="col__2">
                <div className="contact__box">
                    <div className="contact__meta">
                        <h1 className="hire__text">Pray for Me.</h1>
                        <p className="hire__text white">조의금 계좌번호</p>
                        <p className="hire__text white"><strong>352-0202-1234-49</strong></p>
                    </div>
                    <div className="input__box">
                        <input type="text" className="contact name" placeholder='성함 *'/>
                        <input type="text" className="contact email" placeholder='전화번호 *'/>
                        <input type="text" className="contact subject" placeholder='관계'/>
                        <textarea name="message" id="message" placeholder='메시지'></textarea>
                        <button className="btn contact pointer" type="submit" onClick={()=>{
                            window.open('https://banking.nonghyup.com/nhbank.html')
                        }}>Donate</button>
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

export default Seventies_jeon_sad