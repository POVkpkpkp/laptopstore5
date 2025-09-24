import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SliderBar() {
  return (
    <>
      <Swiper
      
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-[500px] lg:top-[70px] top-[60px]"
      >
        <SwiperSlide><img src="/img/slide1.png" alt=""  className='w-full h-full object-cover '/></SwiperSlide>
        <SwiperSlide><img src="/img/slide2.png" alt=""  className='w-full h-full object-cover '/></SwiperSlide>
        <SwiperSlide><img src="/img/slide3.png" alt=""  className='w-full h-full object-cover '/></SwiperSlide>
        <SwiperSlide><img src="/img/slide4.png" alt=""  className='w-full h-full object-cover '/></SwiperSlide>
      </Swiper>
    </>
  );
}
