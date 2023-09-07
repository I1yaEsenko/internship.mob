import React from 'react';
import './style.css'
import one from './img/one.png'
import two from './img/two.png'
import three from './img/three.png'
import prototype from './img/prototype.png'
import desk from './img/desk.png'


export const About = () => {
   return (
     <React.Fragment>
        <section className="about">
           <div className="about__bg">
              <div className='about__bg-container'>
                 <div className="about__title title green-line">Что такое <br/>
                    Clover Research?
                 </div>
                 <div className="about__desc">
                    <div className="about__text text">Маркетинговые исследования в медицине и фармацевтике</div>
                    <div className="about__highlighted highlighted">Целевая аудитория - врачи</div>
                 </div>
              </div>
           </div>
           <div className="container">
              <div className="about__wrapper">
                 <div className="about__images">
                    <div className='about__image'><img src={one} alt=""/></div>
                    <div className='about__image'><img src={two} alt=""/></div>
                    <div className='about__image'><img src={three} alt=""/></div>
                 </div>
                 <div className="about__prototype prototype">
                    <div className="prototype__count">30+</div>
                    <div className="prototype__title title">прототипов</div>
                    <div className="prototype__text">Провели UX-аналитику, предусмотрели все сценарии использования
                    </div>
                    <div className="prototype__img">
                       <img src={prototype} alt=""/>
                    </div>
                 </div>
                 <div className="about__poll poll">
                    <div className="poll__body">
                       <div className="poll__title title green-line">Зачем нужны опросники для врачей?</div>
                       <ul className="poll__list">
                          <li className="poll__list-item">Опыт использования медицинских препаратов</li>
                          <li className="poll__list-item">Социологические исследования</li>
                          <li className="poll__list-item">Live - аналитика</li>
                       </ul>
                    </div>
                    <div className="poll__img">
                       <img src={desk} alt=""/>
                    </div>
                 </div>
              </div>
           </div>


        </section>

     </React.Fragment>
   );
};

