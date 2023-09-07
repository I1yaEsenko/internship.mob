import React, {useEffect} from 'react';
import logo from '../../../assets/mob/mob_logo.svg'
import burger from '../../../assets/mob/mob_burger.svg'
import arrow from '../../../assets/mob/mob_arrow.svg'
import {Button} from "../../forms";
import './style.css'
//@ts-ignore
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';


export const Header = () => {

   useEffect(() => {
      const wow = new WOW.WOW();
      wow.init();
   }, []);


   return (
     <React.Fragment>
        <header className="header wow animate__slideInLeft"  data-wow-duration='2s'>
           <div className="header__wrapper">
              <div className="header__row-top">
                 <div className="header__logo">
                    <img src={logo} alt='logo'/>
                 </div>
                 <div className="header__actions">
                    <div className='header__btn'>
                       <Button name={'Заказать разработку'}/>
                    </div>
                    <div className="header__burger">
                       <img src={burger}/>
                    </div>
                 </div>
              </div>
              <nav className="header__navigation navigation">
                 <ul className="navigation__list">
                    <li className="navigation__item">
                       <a href="#!" className="navigation__link">Главная</a>
                    </li>
                    <span className='navigation__arrow'><img src={arrow}/></span>
                    <li className="navigation__item">
                       <a href="#!" className="navigation__link">Кейсы</a>
                    </li>
                    <span className='navigation__arrow'><img src={arrow}/></span>
                    <li className="navigation__item">
                       <a href="#!" className="navigation__link">Clover Research </a>
                    </li>
                 </ul>
              </nav>
           </div>
        </header>
     </React.Fragment>
   );
};

