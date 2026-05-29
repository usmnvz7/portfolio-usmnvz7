import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { useApp} from '../../context/AppContext';

const footerLinkTranslations = {
  RU: {
    heading: "Хотите увидеть больше?",
    subheading: "Нажмите ниже, чтобы перейти на вторую страницу нашего приложения.",
    buttonText: "Открыть страницу 2 →"
  },
  EN: {
    heading: "Want to see more?",
    subheading: "Click below to go to the second page of our application.",
    buttonText: "Open Page 2 →"
  }
};


const RotatingTorus = () => {
  const ref = useRef<any>(null);

 
  const [points] = useState(() => {
    const p = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const u = Math.random() * Math.PI * 2;
      const r = 0.6 + Math.random() * 0.15; 
      
      
      p[i * 3] = Math.cos(u) * r; 
      p[i * 3 + 1] = Math.sin(u) * r; 
      p[i * 3 + 2] = (Math.random() - 0.5) * 0.2; 
    }
    return p;
  });

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.15;
      ref.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={ref}>
      <Points positions={points} stride={3}>
        <PointMaterial 
          transparent 
          color="#10b981" 
          size={0.008} 
          sizeAttenuation 
          depthWrite={false} 
        />
      </Points>
    </group>
  );
};

const NextPageLink: React.FC = () => {

  const { lang } = useApp();

  const t = footerLinkTranslations[lang] || footerLinkTranslations.RU;

  return (
    
    <div style={{
      position: 'relative',
      width: '100%',
      height: '300px',
      marginTop: '2rem',
      borderRadius: '20px',
      overflow: 'hidden',
      backgroundColor: 'var(--bg-secondary)',
      border: '1px solid var(--card-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
     
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 1, 
        pointerEvents: 'none' 
      }}>
        <Canvas camera={{ position: [0, 0, 1.2] }}>
          <RotatingTorus />
        </Canvas>
      </div>

      
      <div style={{ zIndex: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
       <h2>{t.heading}</h2>
       <p>{t.subheading}</p>
        <Link to="/page2" style={{
          padding: '0.8rem 2rem',
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          color: '#fff',
          fontWeight: 600,
          borderRadius: '10px',
          boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
          transition: 'all 0.3s ease',
          textDecoration: 'none',
          display: 'inline-block'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          {t.buttonText}
        </Link>
      </div>
    </div>
  );
};

export default NextPageLink;