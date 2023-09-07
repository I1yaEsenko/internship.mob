import React from 'react';
import './style.css'
import copyright from '../../../assets/mob/copyright.svg'
import {CustomForm} from "../../forms";
import vk from './img/vk.svg'
import telegram from './img/telegram.svg'
import hh from './img/hh.svg'
import behance from './img/behance.svg'
import hubr from './img/hubr.svg'
import dribbble from './img/dribbble.svg'
import vc from './img/vc.svg'

export const Footer = () => {
   return (
     <React.Fragment>
        <footer className="footer">
           <div className="container">
              <div className="footer__wrapper">
                    <div className="footer__contacts contacts">
                       <div className="contacts__wrapper">
                          <div className="contacts__info">
                             <div className="contacts__title title">Контакты</div>
                             <div className="contacts__telegram">Telegram <img src={telegram} alt='telergram'/></div>
                             <div className="contacts__phone">8 800 234 32 62</div>
                             <div className="contacts__mail">hello@joy-dev.com</div>
                             <div className="contacts__address">Россия, 127282, Москва г, Студёный проезд, дом 4, корпус 1,
                                Э 1/ПОМ V/К 14/ОФ 87
                             </div>
                          </div>

                          <div className="social">
                             <div className="social__wrapper">
                                <div className="social__title">Подписывайтесь</div>
                                <div className="social__links">
                                   <a href="#!" className="social__link"><img src={ behance } alt=''  /></a>
                                   <a href="#!" className="social__link"><img src={ dribbble } alt=''/></a>
                                   <a href="#!" className="social__link"><img src={ vc } alt='' className='vc' /></a>
                                   <a href="#!" className="social__link"><img src={ vk } alt='' className='vk' /></a>
                                   <a href="#!" className="social__link"><img src={ hubr } alt=''className='hubr'/></a>
                                   <a href="#!" className="social__link"><img src={ hh } alt=''/></a>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="footer__form form">
                       <div className="form__wrapper">
                          <div className="footer__title form__title title">Давайте знакомиться!</div>
                          <div className="form__description">Мы всегда рады сотрудничеству и новым проектам</div>
                          <div className="form__item">
                             <CustomForm/>
                          </div>
                       </div>
                    </div>
              </div>
           </div>
           <div className="footer__privacy">
              <div className='footer__copyright'>
                 <img src={copyright}/>
                 2023 Joy Dev. Все права защищены.&nbsp;
              </div>
              <a href="#!" className="footer__privacy-link privacy">Политика конфиденциальности</a>
           </div>
        </footer>
     </React.Fragment>
   );
};

