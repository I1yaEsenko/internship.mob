import React from 'react';
import './style.css'
import '../../../styles/vars.css'
import chatbot from './img/chatbot.png'
import quiz from './img/quiz.png'
import quizInfo from './img/quizinfo.png'
import data from './img/data.svg'
import quizIcon from './img/quiz.svg'
import register from './img/register.svg'

export const ChatBot = () => {
   return (
     <React.Fragment>
         <section className="chatbot">
            <      div className="container">
               <div className="chatbot__info info">
                  <div className="info__img">
                     <img src={chatbot} alt=""/>
                  </div>
                  <div className="info__box">
                     <h2 className="info__box-title title">Фишка проекта<span className='info__span'> чат-бот</span></h2>
                     <div className="info__text">Хелп-деск помогает пользователям заполнять данные</div>
                     <ul className="info__list">
                        <li className="info__list-item"><img src={data} alt={data}/>Личные данные</li>
                        <li className="info__list-item"><img src={register} alt={register}/>Регистрация</li>
                        <li className="info__list-item"><img src={quizIcon} alt={quizIcon}/>Опросы</li>
                     </ul>
                  </div>
               </div>
               <div className="chatbot__quiz quiz">
                  <div className="quiz__box">
                     <h2 className="quiz__box-title title green-line">Разные виды&nbsp;
                        <span>вопросов</span></h2>
                     <ul className="quiz__list">
                        <li className="quiz__list-item">Скринеры определяют, подходит ли пользователю опрос</li>
                        <li className="quiz__list-item">С простыми или условными переходами зависят от ответов пользователей</li>
                     </ul>
                     <div className="quiz__highlighted highlighted">Прост в использовании</div>
                  </div>
                  <div className="quiz__images">
                     <div className="quiz__image"><img src={quiz} alt="phone"/></div>
                     <div className="quiz__image"> <img src={quizInfo} alt="phone"/></div>
                  </div>
               </div>

            </div>
         </section>
     </React.Fragment>
   );
};

