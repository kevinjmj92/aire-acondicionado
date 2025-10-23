import React from 'react';
import Header from './components/landing/Header';
import Hero from './components/landing/Hero';
import Features from './components/landing/Features';
import ProductShowcase from './components/landing/ProductShowcase';
import Footer from './components/landing/Footer';
import ChatWidget from './components/ChatWidget'; // 👈 Agrega esta línea
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