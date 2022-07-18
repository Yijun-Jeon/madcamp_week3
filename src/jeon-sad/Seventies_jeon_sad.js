import React from 'react'
import '../css/Contact.css'
import contactImg from '../img/portrait_jeon.png'

function Seventies_jeon_sad() {
  return (
    <div className='contact component__space' id="70s">
        <div className="row">
            <div className="col__2">
                <div className="contact__box">
                    <div className="contact__meta">
                        <h1 className="hire__text">Pray for Me</h1>
                        <p className="hire__text white">조의금 계좌번호</p>
                        <p className="hire__text white"><strong>352-0237-7437-13</strong></p>
                    </div>
                    <div className="input__box">
                    <input type="text" className="contact name" placeholder='이름'/>
                    <input type="text" className="contact email" placeholder='카드번호'/>
                    <input type="text" className="contact subject" placeholder='cvc 3자리'/>
                    <textarea name="message" id="message" placeholder='비밀번호'></textarea>
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