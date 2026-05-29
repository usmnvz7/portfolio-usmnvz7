import React, { useEffect, useState } from 'react';
import NextPageLink from './NextPageLink';
import { useApp } from '../../context/AppContext';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string; 
  homepage: string | null; 
  stargazers_count: number;
  language: string;
}

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  const { lang } = useApp();

  

  

  const translations = {
  RU: { title: "Мои Проекты", desc: "Вот что я создал..." },
  EN: { title: "My Projects", desc: "Here is what I've built..." }
};
const currentTexts = translations[lang as keyof typeof translations] || translations.RU;

  useEffect(() => {
    fetch('https://api.github.com/users/usmnvz7/repos?sort=updated&per_page=6')
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
      })
      .catch(() => {
        
        setRepos([
          {
            id: 1,
            name: 'react-dz-2',
            description: 'Описание проекта отсутствует.',
            html_url: 'https://github.com/usmnvz7/react-dz-2',
            homepage: 'https://usmnvz7.github.io/react-dz-2',
            stargazers_count: 0,
            language: 'JavaScript'
          },
          {
            id: 2,
            name: 'react-todo-hw',
            description: 'Описание проекта отсутствует.',
            html_url: 'https://github.com/usmnvz7/react-todo-hw',
            homepage: null,
            stargazers_count: 0,
            language: 'JavaScript'
          }
        ]);
      });
  }, []);

  return (
    <section id="projects" style={{ padding: '5rem 0', width: '100%', backgroundColor: 'transparent' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
      <h2>{currentTexts.title}</h2>
        <div style={{ width: '50px', height: '4px', backgroundColor: '#10b981', marginBottom: '3rem', borderRadius: '2px' }}></div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem',
          marginBottom: '4rem' 
        }}>
          {repos.map((repo) => (
            <div 
              key={repo.id}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--card-border)',
                borderRadius: '16px',
                padding: '2rem',
                color: 'var(--text-primary)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 15px var(--card-shadow)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = '#10b981';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--card-border)';
              }}
            >
              <div>
              
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#10b981', margin: 0 }}>{repo.name}</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>⭐ {repo.stargazers_count}</span>
                </div>

              <p>{currentTexts.desc}</p>
              </div>

              
              <div style={{ marginTop: 'auto' }}>
                <div style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 600, marginBottom: '1.2rem' }}>
                  {repo.language || 'JavaScript'}
                </div>

                
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {/* Кнопка CODE */}
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      padding: '0.6rem 0',
                      textAlign: 'center',
                      border: '1px solid var(--card-border)',
                      borderRadius: '8px',
                      color: 'var(--text-primary)',
                      background: 'transparent',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--card-border)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    🧑‍💻 Code
                  </a>

                  {/* Кнопка DEMO */}
                  <a 
                    href={repo.homepage || '#'} 
                    target={repo.homepage ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!repo.homepage) {
                        e.preventDefault();
                        alert('У этого репозитория ещё не настроена живая Demo страница!');
                      }
                    }}
                    style={{
                      flex: 1,
                      padding: '0.6rem 0',
                      textAlign: 'center',
                      borderRadius: '8px',
                      color: '#fff',
                      background: repo.homepage 
                        ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' 
                        : '#374151', 
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      opacity: repo.homepage ? 1 : 0.5,
                      cursor: repo.homepage ? 'pointer' : 'not-allowed',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      if (repo.homepage) e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      if (repo.homepage) e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    👀 Demo
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

       
        <NextPageLink />
      </div>
    </section>
  );
};

export default Projects;