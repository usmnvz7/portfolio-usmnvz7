import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp as useLanguage } from "../../context/AppContext";

const Header: React.FC = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  
  const { lang, toggleLanguage, theme, toggleTheme } = useLanguage();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isMainPage) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

 
  const handleLogoEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'perspective(600px) rotateX(20deg) rotateY(-15deg) translateY(-6px) scale(1.05)';
    e.currentTarget.style.color = '#ffffff';
   
    e.currentTarget.style.textShadow = `
      1px 1px 0px #059669,
      2px 2px 0px #059669,
      3px 3px 0px #047857,
      4px 4px 0px #047857,
      0px 0px 12px #10b981,
      0px 0px 25px rgba(16, 185, 129, 0.8)
    `;
  };

  const handleLogoLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
    e.currentTarget.style.color = '#10b981';
    e.currentTarget.style.textShadow = 'none';
  };

  
  const handleLinksEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'perspective(600px) rotateX(22deg) translateY(-5px) scale(1.03)';
    e.currentTarget.style.color = '#ffffff'; 
    
   
    const edgeColor = theme === 'dark' ? '#059669' : '#047857'; 
    const neonGlow = '#10b981';

    e.currentTarget.style.textShadow = `
      1px 1px 0px ${edgeColor},
      2px 2px 0px ${edgeColor},
      3px 3px 0px ${edgeColor},
      0px 0px 10px ${neonGlow},
      0px 0px 20px rgba(16, 185, 129, 0.6)
    `;
  };

  const handleLinksLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'perspective(600px) rotateX(0deg) translateY(0) scale(1)';
    e.currentTarget.style.color = theme === 'dark' ? '#f8fafc' : '#0f172a';
    e.currentTarget.style.textShadow = 'none';
  };

  
  const navLinkStyle: React.CSSProperties = {
    color: theme === 'dark' ? '#f8fafc' : '#0f172a',
    textDecoration: 'none',
    fontWeight: 800,
    fontSize: '1.1rem',
    letterSpacing: '0.5px',
    transition: 'all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)', 
    display: 'inline-block'
  };

  
  const handleBtnEnter = (e: React.MouseEvent<HTMLButtonElement>, glowColor: string) => {
    e.currentTarget.style.transform = 'translateY(-3px)';
    e.currentTarget.style.boxShadow = `0 5px 0 ${theme === 'dark' ? '#0f172a' : '#cbd5e1'}, 0 10px 25px ${glowColor}`;
    const ring = e.currentTarget.querySelector('.neon-ring') as HTMLElement;
    if (ring) {
      ring.style.opacity = '1';
      ring.style.transform = 'scale(1.1) rotate(180deg)';
    }
    const icon = e.currentTarget.querySelector('.theme-icon') as HTMLElement;
    if (icon) {
      icon.style.transform = 'rotate(360deg) scale(1.25)';
    }
  };

  const handleBtnLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = `0 4px 0 ${theme === 'dark' ? '#090d16' : '#94a3b8'}, 0 4px 10px rgba(0,0,0,0.3)`;
    const ring = e.currentTarget.querySelector('.neon-ring') as HTMLElement;
    if (ring) {
      ring.style.opacity = '0';
      ring.style.transform = 'scale(0.8) rotate(0deg)';
    }
    const icon = e.currentTarget.querySelector('.theme-icon') as HTMLElement;
    if (icon) {
      icon.style.transform = 'rotate(0deg) scale(1)';
    }
  };

  const handleBtnDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translateY(4px)';
    e.currentTarget.style.boxShadow = '0 0px 0 transparent, 0 2px 5px rgba(0,0,0,0.5)';
  };

  const greenGlow = 'rgba(16, 185, 129, 0.6)';
  const purpleGlow = theme === 'dark' ? 'rgba(163, 230, 53, 0.5)' : 'rgba(124, 58, 237, 0.6)';

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '75px',
      backgroundColor: theme === 'dark' ? '#141e30' : '#ffffff', 
      borderBottom: theme === 'dark' ? '1px solid #243b55' : '1px solid #e2e8f0',
      zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2rem', boxSizing: 'border-box', transition: 'all 0.3s ease'
    }}>
      
      
      <div style={{ flex: 1, perspective: '600px' }}>
        <Link 
          to="/" 
          onMouseEnter={handleLogoEnter}
          onMouseLeave={handleLogoLeave}
          style={{ 
            fontSize: '1.7rem', fontWeight: 950, color: '#10b981', textDecoration: 'none',
            display: 'inline-block', letterSpacing: '1px', transformOrigin: 'left center',
            transition: 'all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)'
          }}
        >
          usmnvz7
        </Link>
      </div>

     
      <nav style={{ display: 'flex', gap: '2.2rem', alignItems: 'center', perspective: '600px' }}>
        <a href="/#hero" onClick={(e) => handleScroll(e, 'hero')} onMouseEnter={handleLinksEnter} onMouseLeave={handleLinksLeave} style={navLinkStyle}>
          {lang === 'RU' ? 'Главная' : 'Home'}
        </a>
        <a href="/#about" onClick={(e) => handleScroll(e, 'about')} onMouseEnter={handleLinksEnter} onMouseLeave={handleLinksLeave} style={navLinkStyle}>
          {lang === 'RU' ? 'О себе' : 'About'}
        </a>
        <a href="/#skills" onClick={(e) => handleScroll(e, 'skills')} onMouseEnter={handleLinksEnter} onMouseLeave={handleLinksLeave} style={navLinkStyle}>
          {lang === 'RU' ? 'Навыки' : 'Skills'}
        </a>
        <a href="/#projects" onClick={(e) => handleScroll(e, 'projects')} onMouseEnter={handleLinksEnter} onMouseLeave={handleLinksLeave} style={navLinkStyle}>
          {lang === 'RU' ? 'Проекты' : 'Projects'}
        </a>
       
      </nav>

      
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: '1.5rem', alignItems: 'center' }}>
        
       
        <button 
          onMouseEnter={(e) => handleBtnEnter(e, greenGlow)}
          onMouseLeave={handleBtnLeave}
          onMouseDown={handleBtnDown}
          onMouseUp={(e) => { handleBtnEnter(e, greenGlow); toggleLanguage(); }}
          style={{
            position: 'relative',
            padding: '0.6rem 1.3rem', fontSize: '0.95rem', fontWeight: 800, color: '#ffffff',
            background: theme === 'dark' ? 'linear-gradient(135deg, #1e293b, #0f172a)' : 'linear-gradient(135deg, #10b981, #059669)',
            border: 'none', borderRadius: '30px', cursor: 'pointer',
            boxShadow: `0 4px 0 ${theme === 'dark' ? '#090d16' : '#047857'}, 0 4px 10px rgba(0,0,0,0.3)`,
            transition: 'transform 0.1s ease, box-shadow 0.1s ease',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
        >
          <div className="neon-ring" style={{
            position: 'absolute', top: '-6px', left: '-6px', right: '-6px', bottom: '-6px',
            border: '2px solid #10b981', borderRadius: '35px', opacity: 0, pointerEvents: 'none',
            boxShadow: '0 0 18px #10b981, inset 0 0 10px #10b981',
            transition: 'all 0.3s ease'
          }} />
          <span style={{ zIndex: 2 }}>🌐 {lang}</span>
        </button>

       
        <button 
          onMouseEnter={(e) => handleBtnEnter(e, purpleGlow)}
          onMouseLeave={handleBtnLeave}
          onMouseDown={handleBtnDown}
          onMouseUp={(e) => { handleBtnEnter(e, purpleGlow); toggleTheme(); }}
          style={{
            position: 'relative',
            width: '44px', height: '44px',
            background: theme === 'dark' ? 'linear-gradient(135deg, #0f172a, #1e1b4b)' : 'linear-gradient(135deg, #ecfdf5, #a7f3d0)',
            border: 'none', borderRadius: '50%', cursor: 'pointer',
            boxShadow: `0 4px 0 ${theme === 'dark' ? '#08071a' : '#059669'}, 0 4px 10px rgba(0,0,0,0.3)`,
            transition: 'transform 0.1s ease, box-shadow 0.1s ease',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
        >
          <div className="neon-ring" style={{
            position: 'absolute', top: '-6px', left: '-6px', right: '-6px', bottom: '-6px',
            border: theme === 'dark' ? '2px solid #a3e635' : '2px solid #7c3aed', 
            borderRadius: '50%', opacity: 0, pointerEvents: 'none',
            boxShadow: theme === 'dark' ? '0 0 18px #a3e635, inset 0 0 10px #a3e635' : '0 0 18px #7c3aed, inset 0 0 10px #7c3aed',
            transition: 'all 0.3s ease'
          }} />
          <span className="theme-icon" style={{ 
            zIndex: 2, fontSize: '1.4rem', display: 'inline-block',
            transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
            filter: theme === 'dark' ? 'drop-shadow(0 0 6px #a3e635)' : 'drop-shadow(0 0 6px #7c3aed)'
          }}>
            {theme === 'dark' ? '🔮' : '⚡'}
          </span>
        </button>

      </div>
    </header>
  );
};

export default Header;