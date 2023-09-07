import React from 'react';
import './style.css'
import mob_banner from './img/mob_banner.png'
import tab_banner from './img/tab_banner.png'
import banner from './img/banner.png'
import bg from './img/bg.png'


export const Banner = () => {
   return (
     <React.Fragment>
        <div className="banner">
           <div className="banner__image">
              <picture>
                 <source srcSet={banner} type='image/png' media='(min-width: 1024px)'/>
                 <source srcSet={tab_banner} type='image/png' media='(max-width: 320px)'/>
                 <source srcSet={tab_banner} type='image/png' media='(min-width: 767px)'/>

                 <img src={mob_banner} />
              </picture>
              <img src={bg} className='banner__bg'/>
           </div>

           {/*<div className='bg'></div>*/}
        </div>
     </React.Fragment>
   );
};

