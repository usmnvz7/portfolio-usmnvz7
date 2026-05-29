import React from 'react';
import { useApp } from '../../context/AppContext';
import './Skills.module.scss';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

interface SkillGroup {
  categoryRU: string;
  categoryEN: string;
  items: Skill[];
}

const skillsGroups: SkillGroup[] = [
  {
    categoryRU: "Frontend Core",
    categoryEN: "Frontend Core",
    items: [
      { name: 'React', percentage: 90, color: '#10b981' },
      { name: 'TypeScript', percentage: 85, color: '#0284c7' },
      { name: 'SCSS / Sass', percentage: 90, color: '#db2777' },
      { name: 'JavaScript', percentage: 88, color: '#f59e0b' },
    ]
  },
  {
    categoryRU: "Инструменты",
    categoryEN: "Tools & State",
    items: [
      { name: 'Redux Toolkit', percentage: 80, color: '#7c3aed' },
      { name: 'Vite', percentage: 85, color: '#b45309' },
      { name: 'Git / GitHub', percentage: 90, color: '#10b981' },
      { name: 'GitHub API', percentage: 75, color: '#10b981' },
    ]
  },
  {
    categoryRU: "В разработке",
    categoryEN: "Learning & Next",
    items: [
      { name: 'Next.js', percentage: 65, color: '#ffffff' },
      { name: 'Three.js', percentage: 50, color: '#f59e0b' },
      { name: 'Node.js', percentage: 45, color: '#059669' },
      { name: 'REST API', percentage: 80, color: '#0284c7' },
    ]
  }
];

const translations = {
  RU: { title: "Навыки", subtitle: "Уровень владения технологиями" },
  EN: { title: "Skills", subtitle: "Tech stack proficiency level" }
};

export const Skills: React.FC = () => {
  const { lang } = useApp();
  const t = translations[lang] || translations.RU;

  return (
    <section id="skills" className="skills-section" style={{ padding: '6rem 2rem', width: '100%', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        
        <h2 className="skills-title" style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>
          {t.title}
        </h2>
        <p className="skills-subtitle" style={{ color: '#10b981', fontWeight: 600, marginBottom: '4rem', fontSize: '1.1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
          {t.subtitle}
        </p>

       
        <div 
          className="skills-columns-grid" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {skillsGroups.map((group, groupIdx) => (
            <div 
              key={groupIdx} 
              className="skill-column"
              style={{
                background: 'rgba(30, 41, 59, 0.4)',
                borderRadius: '20px',
                padding: '2rem 1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >
             
              <h3 
                style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: 700, 
                  color: '#94a3b8', 
                  textAlign: 'left',
                  margin: '0 0 0.5rem 0',
                  paddingBottom: '0.5rem',
                  borderBottom: '2px solid rgba(16, 185, 129, 0.1)'
                }}
              >
                {lang === 'RU' ? group.categoryRU : group.categoryEN}
              </h3>

              
              {group.items.map((skill, skillIdx) => (
                <div 
                  key={skillIdx} 
                  className="skill-bar-card"
                  style={{
                    width: '100%',
                    height: '85px',
                    padding: '1rem 1.2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderLeft: `4px solid ${skill.color}`, 
                    borderRadius: '12px',
                    boxSizing: 'border-box',
                    transition: 'transform 0.2s ease, background-color 0.2s ease'
                  }}
                >
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#ffffff' }}>
                      {skill.name}
                    </span>
                    <span style={{ fontWeight: 800, fontSize: '1.05rem', color: skill.color }}>
                      {skill.percentage}%
                    </span>
                  </div>

                
                  <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '10px', overflow: 'hidden' }}>
                    <div 
                      style={{ 
                        height: '100%',
                        width: `${skill.percentage}%`,
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}`,
                        borderRadius: '10px'
                      }}
                    />
                  </div>
                </div>
              ))}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;