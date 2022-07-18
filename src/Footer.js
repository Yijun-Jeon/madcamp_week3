import React from 'react';
import footerImg from './img/moliplogo_black.png';

function Footer() {
  return (
    <div className='footer d__flex align__items__center justify__content__space__between pz-10' style={{"padding":"10px","zIndex":"100"}}>
        <img src={footerImg} width={70} alt="" className="footer__img pointer" />
        <span className="copyright" style={{"color":"#c6c9d8","fontSize":"14px","opacity":"0.75"}}>Copyright @ 2022 programmer Yijun Jeon. All Rights Reserved.</span>
    </div>
  )
}


export default Footer