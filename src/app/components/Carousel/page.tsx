// components/Carousel.tsx
"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel: React.FC = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
        <SwiperSlide key={index}>
          <div className="slide-content">
            <img
              src={`https://via.placeholder.com/300x200?text=Slide1`}
              alt={`Slide ${index}`}
            />
            <h2 className="slide-title">Slide {index}</h2>
            <p className="slide-subtitle">Description for Slide {index}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;