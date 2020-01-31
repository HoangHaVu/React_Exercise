import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import css from './Carousel.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel: React.FunctionComponent = () => {
  return (
    <div className={css.carousel}>
      <CarouselProvider naturalSlideHeight={505} naturalSlideWidth={750} totalSlides={4}>
        <Slider>
          <Slide index={0}>
            <div className={css.imagewrapper}>
              <img src="/slide1.jpg" alt="Product" />
            </div>
          </Slide>
          <Slide index={1}>
            <div className={css.imagewrapper}>
              <img src="/slide2.jpeg" alt="Product" />
            </div>
          </Slide>
          <Slide index={2}>
            <div className={css.imagewrapper}>
              <img src="/slide3.jpg" alt="Product" />
            </div>
          </Slide>
          <Slide index={3}>
            <div className={css.imagewrapper}>
              <img src="/slide4.jpg" alt="Product" />
            </div>
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </div>
  );
};
export default Carousel;
