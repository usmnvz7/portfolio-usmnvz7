import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export const Header: React.FC = () => {

  const { lang, toggleLanguage } = useApp() as any; 

 
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  
  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);

    
    if (nextTheme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  };

  
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);


  const isDark = theme === 'dark';
  const headerBg = isDark ? 'rgba(11, 17, 30, 0.7)' : 'rgba(255, 255, 255, 0.8)';
  const headerBorder = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';
  const logoColor = '#10b981'; 
  const linkColor = isDark ? '#94a3b8' : '#475569';

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      background: headerBg,
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${headerBorder}`,
      boxSizing: 'border-box',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '12px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        
        {/* ЛОГОТИП / ИМЯ */}
        <div style={{ 
          fontWeight: 700, 
          fontSize: '18px', 
          color: logoColor, 
          letterSpacing: '0.5px' 
        }}>
          Atkham
        </div>

        <nav style={{
          display: 'flex',
          gap: '15px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <a href="#hero" style={{ ...linkStyle, color: linkColor }}>{lang === 'RU' ? 'Главная' : 'Home'}</a>
          <a href="#skills" style={{ ...linkStyle, color: linkColor }}>{lang === 'RU' ? 'Навыки' : 'Skills'}</a>
          <a href="#projects" style={{ ...linkStyle, color: linkColor }}>{lang === 'RU' ? 'Проекты' : 'Projects'}</a>
          <a href="#about" style={{ ...linkStyle, color: linkColor }}>{lang === 'RU' ? 'О себе' : 'About'}</a>
        
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          
          
          <button 
            onClick={handleToggleTheme}
            style={{
              ...btnStyle,
              background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.15)',
              color: isDark ? '#fff' : '#000',
            }}
            title={lang === 'RU' ? 'Сменить тему' : 'Toggle Theme'}
          >
            {isDark ? '🔮' : '☀️'}
          </button>

         
          <button 
            onClick={toggleLanguage} 
            style={{
              ...btnStyle,
              background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.15)',
              color: isDark ? '#fff' : '#000',
            }}
          >
            {lang}
          </button>

        </div>

      </div>
    </header>
  );
};


const linkStyle: React.CSSProperties = {
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: 500,
  transition: 'color 0.2s',
  padding: '4px 6px'
};


const btnStyle: React.CSSProperties = {
  padding: '6px 12px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 600,
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s',
  userSelect: 'none'
};

export default Header;