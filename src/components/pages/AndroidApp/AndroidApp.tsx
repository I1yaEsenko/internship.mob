import React from 'react';
import phone from './img/phone.png'
import './style.css'


export const AndroidApp = () => {
   return (
     <React.Fragment>
        <section className="application">
           <div className="container">
              <div className="application__wrapper">
                 <h2 className="application__title title">Наша команда разработала приложение для ОС Android</h2>
                 <div className="application__body">
                    <img src={phone} alt="phone" className="application__img"/>
                    <div className="application__tech"><span className='application__span'>Технологии:</span> MVVM,
                       Retrofit, Kotlin Coroutines, Pagging 3, Socket.io, Room
                    </div>
                 </div>
              </div>
           </div>
        </section>
     </React.Fragment>
   );
};

