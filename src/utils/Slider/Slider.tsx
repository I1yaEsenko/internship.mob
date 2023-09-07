import React from 'react';
import {Carousel} from "react-responsive-carousel";
import item1 from './img/1.png'
import item2 from './img/2.png'
import item3 from './img/3.png'
import 'react-responsive-carousel/lib/styles/carousel.css'
import './style.css'

interface SliderProps {}

export const Slider: React.FC<SliderProps> = () => {
   const renderCustomNextArrow = (
     onClickHandler: React.MouseEventHandler<HTMLButtonElement>,
     hasNext: boolean
   ) => {
      return (
        <button
          className="custom-arrow custom-arrow_next"
          onClick={onClickHandler}
          disabled={!hasNext}
        >
        </button>
      );
   };

   return (
     <React.Fragment>
        <Carousel
          showArrows={true}
          showStatus={false}
          showIndicators={true}
          centerMode={true}
          centerSlidePercentage={100}
          renderArrowNext={renderCustomNextArrow}
          showThumbs={false}
          infiniteLoop={true}
          dynamicHeight={false}
        >
           <div className='slider__item'>
              <img src={item1} />
           </div>
           <div className='slider__item'>
              <img src={item2} />
           </div>
           <div className='slider__item'>
              <img src={item3} />
           </div>
        </Carousel>
     </React.Fragment>
   );
};

