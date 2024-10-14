// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import SocialSection from './components/socialSection/page';
import Carousel from './components/Carousel/page';
const Home: React.FC = () => {
  return (
    <div className="cards-page">
      <Head>
        <title>Swiper Carousel Page</title>
        <meta name="description" content="Swiper Carousel Example" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
      </Head>

      <div className="container">
        <div className="containerTitle text-center my-5">
          <h1 className="main-title">Carrusel de Imágenes</h1>
          <p className="subtitle text-lg text-gray-600">
            Explora nuestro carrusel con Swiper.js
          </p>
        </div>

        <Carousel />
        <SocialSection />
      </div>
    </div>
  );
};

export default Home;