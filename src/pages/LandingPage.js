import React from 'react';
import Header from '../components/landing/header/Header';
import Hero from '../components/landing/hero/Hero';
import Footer from '../components/landing/footer/Footer';
import Features from '../components/landing/features/Features';
import Products from '../components/landing/products/ProductShowcase';
import ChatBot from '../components/landing/chatbot/ChatWidget';

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Header />
      <Hero />
      <Features />
      <Products />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default LandingPage;