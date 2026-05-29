import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext'; // или твой контекст темы/языка
import './Header.module.scss'; // или .css

export const Header: React.FC = () => {
  const { theme, lang, toggleLanguage } = useApp(); // берём язык и тему
  const [isMobile, setIsMobile] = useState(false);

  // Следим за размером экрана в реальном времени
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize(); // Проверяем при старте
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`custom-header ${theme}`}>
      <div className="header-container">
        
        {/* ЛОГОТИП / ИМЯ */}
        <div className="logo">
          <span>Atkham</span>
        </div>

        {/* НАВИГАЦИЯ */}
        <nav className="nav-menu">
          <a href="#hero">{lang === 'RU' ? 'Главная' : 'Home'}</a>
          <a href="#skills">{lang === 'RU' ? 'Навыки' : 'Skills'}</a>
          <a href="#projects">{lang === 'RU' ? 'Проекты' : 'Projects'}</a>
          
          {/* Если экран большой, показываем 'О себе', на мобилке прячем, чтобы не ломать ряд */}
          {!isMobile && <a href="#about">{lang === 'RU' ? 'О себе' : 'About'}</a>}
          
          <a href="#contact">{lang === 'RU' ? 'Контакты' : 'Contact'}</a>
        </nav>

        {/* ПЕРЕКЛЮЧАТЕЛИ (Язык) */}
        <div className="header-actions">
          <button 
            className="lang-btn" 
            onClick={toggleLanguage}
          >
            {lang}
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;