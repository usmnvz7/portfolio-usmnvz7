import React from 'react';
import { useApp } from '../../context/AppContext'; 

import myPhoto from '../../assets/avatar.jpg'; 

const translations = {
  RU: {
    title: "О себе",
    text: "Привет! Меня зовут Атхам. Я фронтенд-разработчик, который любит превращать сложные задачи в простые, отзывчивые и высокопроизводительные веб-приложения на React и TypeScript."
  },
  EN: {
    title: "About Me",
    text: "Hi! My name is Atkham. I am a frontend developer who loves turning complex tasks into simple, responsive, and high-performance web applications using React and TypeScript."
  }
};

export const About: React.FC = () => {
  const { lang } = useApp(); 
  const t = translations[lang] || translations.RU;

  return (
    <section id="about" style={{ 
      padding: '7rem 2rem', 
      backgroundColor: 'transparent', 
      color: 'var(--text-primary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '5rem',
        flexWrap: 'wrap'
      }}>
        
       
        <div style={{ flex: '1.2', minWidth: '300px', textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
            <span style={{ width: '12px', height: '12px', backgroundColor: '#10b981', borderRadius: '50%' }}></span>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 800, margin: 0, letterSpacing: '-0.5px' }}>
              {t.title}
            </h2>
          </div>
          
          <p style={{ 
            color: 'var(--text-secondary)', 
            lineHeight: '1.9',
            fontSize: '1.15rem',
            maxWidth: '600px'
          }}>
            {t.text}
          </p>
        </div>

        
        <div style={{ 
          flex: '1', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          minWidth: '320px',
          position: 'relative'
        }}>
          
          
          <div style={{
            position: 'absolute',
            width: '280px',
            height: '280px',
            backgroundColor: 'transparent',
            border: '2px solid rgba(16, 185, 129, 0.4)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            transform: 'translate(15px, 15px)', 
            zIndex: 1,
            transition: 'all 0.5s ease',
          }}
          className="photo-neon-shadow"
          />

          
          <div style={{
            position: 'relative',
            width: '280px',
            height: '280px',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', 
            overflow: 'hidden',
            border: '3px solid #10b981',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
            zIndex: 2,
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            cursor: 'pointer'
          }}
          
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05) translate(-5px, -5px)';
            e.currentTarget.style.borderRadius = '50%'; 
            
           
            const shadow = e.currentTarget.parentElement?.querySelector('.photo-neon-shadow') as HTMLElement;
            if (shadow) {
              shadow.style.transform = 'translate(25px, 25px) scale(0.95)';
              shadow.style.borderColor = '#059669';
              shadow.style.borderRadius = '50%';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) translate(0, 0)';
            e.currentTarget.style.borderRadius = '60% 40% 30% 70% / 60% 30% 70% 40%';
            
            const shadow = e.currentTarget.parentElement?.querySelector('.photo-neon-shadow') as HTMLElement;
            if (shadow) {
              shadow.style.transform = 'translate(15px, 15px)';
              shadow.style.borderColor = 'rgba(16, 185, 129, 0.4)';
              shadow.style.borderRadius = '30% 70% 70% 30% / 30% 30% 70% 70%';
            }
          }}
          >
            <img 
              src={myPhoto} 
              alt="Atkham" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;