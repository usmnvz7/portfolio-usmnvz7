import React from 'react';
import { useApp } from '../../context/AppContext'; 
import HeroBackground from './HeroBackground';
import myPhoto from '../../assets/avatar2.jpg'; 

const Hero: React.FC = () => {
  const { lang } = useApp();

  const textTranslations = {
    RU: {
      title: 'Привет, я Атхам',
      subtitle: 'Frontend Web Developer',
      description: 'Создаю современные, отзывчивые и высокопроизводительные веб-приложения на React и TypeScript.',
      cta: 'Связаться'
    },
    EN: {
      title: "Hi, I'm Atkham",
      subtitle: 'Frontend Web Developer',
      description: 'Building modern, responsive, and high-performance web applications using React and TypeScript.',
      cta: 'Get In Touch'
    }
  };

  const currentText = textTranslations[lang] || textTranslations.RU;

  return (
    <section id="hero" style={{
      position: 'relative',
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      padding: '0 10%',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      
      <HeroBackground />

      <div style={{ 
        zIndex: 2, 
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1200px',
        gap: '4rem',
        flexWrap: 'wrap-reverse' 
      }}>
        
      
        <div style={{ 
          flex: '1', 
          minWidth: '300px', 
          textAlign: 'left' 
        }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)', lineHeight: '1.2' }}>
            {currentText.title}
          </h1>
          <h2 style={{ fontSize: '1.8rem', color: '#10b981', fontWeight: 600, marginBottom: '1.5rem' }}>
            {currentText.subtitle}
          </h2>
          <p style={{ maxWidth: '550px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>
            {currentText.description}
          </p>
          
          <a 
            href="https://t.me/usmnvzz" 
            target="_blank"           
            rel="noopener noreferrer" 
            style={{
              display: 'inline-block', 
              padding: '0.8rem 2rem',
              fontSize: '1rem',
              fontWeight: 600,
              color: '#fff',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              textDecoration: 'none', 
              boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {currentText.cta}
          </a>
        </div>

       
        <div style={{ 
          flex: '1', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          minWidth: '300px'
        }}>
          <div style={{
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid #10b981', 
            boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img 
              src={myPhoto} 
              alt="Atkham" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover' 
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;