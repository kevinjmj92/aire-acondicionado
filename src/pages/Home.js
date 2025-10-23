import React from 'react';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import ProductShowcase from '../components/landing/ProductShowcase';
import Footer from '../components/landing/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <Features />
      <ProductShowcase />
      <Footer />
    </div>
  );
};

export default Home;