import React, {useEffect} from 'react';
import './style.css'

import item1 from './img/functional-item1.svg'
import item2 from './img/functional-item2.svg'
import item3 from './img/functional-item3.svg'
import item4 from './img/functional-item4.svg'
import item5 from './img/functional-item5.svg'
import {Slider} from "../../../utils/Slider";
//@ts-ignore
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';


export const Design = () => {

   useEffect(() => {
      const wow = new WOW.WOW();
      wow.init();
   }, []);


   return (
     <React.Fragment>
         <section className="design wow animate__fadeInUp " data-wow-duration='2s'>
            <div className="container">
               <div className="design__wrapper">
                  <div className="design__title title">От прототипов
                     до уникального дизайна</div>
                  <div className="design__slider">
                     <Slider/>
                  </div>
               </div>
               <div className="design__functional functional">
                  <div className="functional__title title green-line">Функционал Clover Research</div>
                  <div className="functional__list">
                     <div className="functional__list-item"><img src={item1}/>Регистрация пользователя</div>
                     <div className="functional__list-item"><img src={item2}/>Получение актуальных опросов по тематике </div>
                     <div className="functional__list-item"><img src={item3}/>Помощь с заполнением данных через чат-бот онлайн</div>
                     <div className="functional__list-item"><img src={item4}/>Разделение опросов для разных специалистов</div>
                     <div className="functional__list-item"><img src={item5}/>Сбор данных для live-аналитики</div>
                  </div>
               </div>

            </div>
         </section>
     </React.Fragment>
   );
};

