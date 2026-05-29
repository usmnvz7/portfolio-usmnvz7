import React from 'react';
import { useNavigate } from 'react-router-dom';

const SecondPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      minHeight: 'calc(100vh - 75px)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: 'var(--bg-primary)',
      width: '100%'
    }}>
      <button 
        onClick={() => navigate('/')} 
        style={{
          padding: '1rem 2.5rem',
          fontSize: '1.1rem',
          fontWeight: 600,
          color: 'var(--text-primary)',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--card-border)',
          borderRadius: '14px',
          cursor: 'pointer',
          boxShadow: '0 4px 20px var(--card-shadow)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateX(-6px)';
          e.currentTarget.style.borderColor = 'var(--accent)';
          e.currentTarget.style.boxShadow = '0 6px 25px rgba(16, 185, 129, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateX(0)';
          e.currentTarget.style.borderColor = 'var(--card-border)';
          e.currentTarget.style.boxShadow = '0 4px 20px var(--card-shadow)';
        }}
      >
        ← Назад на главную
      </button>
    </div>
  );
};

export default SecondPage;