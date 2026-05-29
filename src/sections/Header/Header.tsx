import React from 'react';
import { useApp } from '../../context/AppContext';

export const Header: React.FC = () => {
  // Забираем язык и функцию переключения из твоего контекста
  const { lang, toggleLanguage } = useApp() as any; 

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      background: 'rgba(11, 17, 30, 0.7)', // Стеклянный темный фон
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      boxSizing: 'border-box'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '12px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center', // ИСПРАВЛЕНО: camelCase без дефиса
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        
        {/* ЛОГОТИП / ИМЯ */}
        <div style={{ 
          fontWeight: 700, 
          fontSize: '18px', 
          color: '#10b981', 
          letterSpacing: '0.5px' 
        }}>
          Atkham
        </div>

        {/* НАВИГАЦИЯ С ОТСТУПАМИ ДЛЯ МОБИЛОК */}
        <nav style={{
          display: 'flex',
          gap: '15px', // Отступы между ссылками, чтобы они не слипались
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <a href="#hero" style={linkStyle}>{lang === 'RU' ? 'Главная' : 'Home'}</a>
          <a href="#skills" style={linkStyle}>{lang === 'RU' ? 'Навыки' : 'Skills'}</a>
          <a href="#projects" style={linkStyle}>{lang === 'RU' ? 'Проекты' : 'Projects'}</a>
          <a href="#about" style={linkStyle}>{lang === 'RU' ? 'О себе' : 'About'}</a>
          <a href="#contact" style={linkStyle}>{lang === 'RU' ? 'Контакты' : 'Contact'}</a>
        </nav>

        {/* ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА */}
        <div>
          <button 
            onClick={toggleLanguage} 
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#fff',
              padding: '6px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '14px'
            }}
          >
            {lang}
          </button>
        </div>

      </div>
    </header>
  );
};

// Вынесенные стили для ссылок
const linkStyle: React.CSSProperties = {
  color: '#94a3b8',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: 500,
  transition: 'color 0.2s',
  padding: '4px 6px'
};

export default Header;