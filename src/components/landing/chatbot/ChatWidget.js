// src/components/ChatWidget.js - Versión Mejorada
import { useState, useRef, useEffect } from 'react';

const ChatWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: '¡Hola! Soy tu asistente de CoolAir. ¿En qué puedo ayudarte con tus aires acondicionados?', sender: 'bot' }
  ]);
  const chatContainerRef = useRef(null);

  // Auto-scroll al último mensaje
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleSendMessage = () => {
    if (userMessage.trim() === '') return;

    // Agregar mensaje del usuario
    const newUserMessage = {
      id: Date.now(),
      text: userMessage,
      sender: 'user'
    };

    setChatMessages(prev => [...prev, newUserMessage]);
    setUserMessage('');

    // Simular respuesta del bot después de un delay
    setTimeout(() => {
      const commonQuestions = [
        "¿Qué tipo de aire acondicionado necesitas? Tenemos split, inverter, y sistemas centralizados.",
        "¿Para qué espacio es? Necesito saber los metros cuadrados para recomendarte el BTU adecuado.",
        "¿Buscas alta eficiencia energética? Te recomiendo nuestra línea Inverter que ahorra hasta 40% de energía.",
        "¿Necesitas instalación profesional? Todos nuestros productos incluyen instalación con técnicos certificados.",
        "¿Tienes un presupuesto específico? Tenemos opciones desde $12,999 hasta $25,000+"
      ];

      const randomResponse = commonQuestions[Math.floor(Math.random() * commonQuestions.length)];
      
      const botResponse = {
        id: Date.now() + 1,
        text: randomResponse,
        sender: 'bot'
      };

      setChatMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "¿Qué BTU necesito?",
    "Precios de aires split",
    "¿Incluyen instalación?",
    "Garantía de productos"
  ];

  return (
    <>
      {/* Botón flotante del chat */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'linear-gradient(135deg, #0077b6, #00b4d8)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '24px',
          cursor: 'pointer',
          zIndex: 1000,
          boxShadow: '0 4px 20px rgba(0,119,182,0.4)',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        💬
      </button>

      {/* Modal del chat */}
      {isChatOpen && (
        <div style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          width: '350px', // Más compacto
          height: '500px', // Más compacto
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
          zIndex: 1001,
          border: '1px solid #e1e5e9',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
        }}>
          {/* Cabecera del chat */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 20px',
            background: 'linear-gradient(135deg, #0077b6, #00b4d8)',
            color: 'white',
            borderRadius: '16px 16px 0 0',
            borderBottom: '1px solid #e1e5e9'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#4ade80'
              }}></div>
              <strong style={{ fontSize: '16px' }}>Asistente CoolAir</strong>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)}
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ×
            </button>
          </div>
          
          {/* Área de mensajes */}
          <div 
            ref={chatContainerRef}
            style={{ 
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              background: '#f8fafc',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            {chatMessages.map((message) => (
              <div
                key={message.id}
                style={{
                  alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  background: message.sender === 'user' 
                    ? 'linear-gradient(135deg, #0077b6, #00b4d8)' 
                    : 'white',
                  color: message.sender === 'user' ? 'white' : '#333',
                  padding: '12px 16px',
                  borderRadius: message.sender === 'user' 
                    ? '18px 18px 4px 18px' 
                    : '18px 18px 18px 4px',
                  maxWidth: '80%',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  fontSize: '14px',
                  lineHeight: '1.4'
                }}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Preguntas rápidas */}
          <div style={{
            padding: '12px 16px',
            borderTop: '1px solid #e1e5e9',
            background: 'white',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => setUserMessage(question)}
                style={{
                  background: 'transparent',
                  border: '1px solid #0077b6',
                  color: '#0077b6',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#0077b6';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#0077b6';
                }}
              >
                {question}
              </button>
            ))}
          </div>

          {/* Área de entrada de texto */}
          <div style={{
            padding: '16px',
            borderTop: '1px solid #e1e5e9',
            background: 'white',
            borderRadius: '0 0 16px 16px',
            display: 'flex',
            gap: '10px'
          }}>
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe tu mensaje..."
              style={{
                flex: 1,
                padding: '12px 16px',
                border: '1px solid #e1e5e9',
                borderRadius: '25px',
                outline: 'none',
                fontSize: '14px'
              }}
            />
            <button
              onClick={handleSendMessage}
              disabled={!userMessage.trim()}
              style={{
                background: userMessage.trim() 
                  ? 'linear-gradient(135deg, #0077b6, #00b4d8)'
                  : '#ccc',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                cursor: userMessage.trim() ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px'
              }}
            >
              ↑
            </button>
          </div>

          {/* Botón de WhatsApp */}
          <div style={{
            padding: '12px 16px',
            borderTop: '1px solid #e1e5e9',
            background: '#f0f9ff',
            textAlign: 'center'
          }}>
            <button
              onClick={() => window.open('https://wa.me/1234567890?text=Hola,%20me%20interesa%20información%20sobre%20aires%20acondicionados', '_blank')}
              style={{
                background: '#25D366',
                color: 'white',
                border: 'none',
                padding: '10px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                justifyContent: 'center',
                width: '100%'
              }}
            >
              <span>💬</span>
              Contactar por WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;