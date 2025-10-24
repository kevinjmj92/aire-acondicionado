import React from 'react';
import Header from './components/landing/header/Header';
import Hero from './components/landing/hero/Hero';
import Features from './components/landing/features/Features';
import ProductShowcase from './components/landing/products/ProductShowcase';
import Footer from './components/landing/footer/Footer';
import ChatWidget from './components/landing/chatbot/ChatWidget'; // 👈 Agrega esta línea
import './styles/globals.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <ProductShowcase />
      <Footer />
      <ChatWidget /> {/* 👈 Agrega esta línea */}
    </div>
  );
}

export default App;