import React from 'react';
import { useApp, } from '../../context/AppContext'; 

const contactTranslations = {
  RU: {
    title: "Контакты",
    subtitle: "Свяжитесь со мной",
    description: "Я всегда открыт для новых предложений, проектов и сотрудничества. Напишите мне на почту или найдите меня в социальных сетях!",
    buttonText: "Написать мне",
    footerText: "© 2026 A.Dev. Все права защищены."
  },
  EN: {
    title: "Contact",
    subtitle: "Get In Touch",
    description: "I'm always open to new opportunities, projects, and collaboration. Feel free to reach out via email or find me on social media!",
    buttonText: "Send a Message",
    footerText: "© 2026 A.Dev. All rights reserved."
  }
};

export const Contact: React.FC = () => {
  const { lang } = useApp();
  
 
  const t = contactTranslations[lang] || contactTranslations.RU;

  return (
    <section id="contact" style={{ padding: '5rem 2rem', color: 'var(--text-primary)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        
      <h2>Контакты</h2>
        
       
        <h3 style={{ fontSize: '1.5rem', color: '#10b981', marginBottom: '1.5rem' }}>
          {t.subtitle}
        </h3>
        
       
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem' }}>
          {t.description}
        </p>

        
        <a 
          href="mailto:your-email@example.com" 
          style={{
            display: 'inline-block',
            padding: '0.8rem 2rem',
            backgroundColor: '#10b981',
            color: '#fff',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'background-color 0.3s'
          }}
        >
          {t.buttonText}
        </a>

        
        <footer style={{ marginTop: '5rem', borderTop: '1px solid #334155', paddingTop: '2rem', color: '#64748b' }}>
          <p>{t.footerText}</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;