import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './sections/Header';
import HomePage from './pages/HomePage';
import SecondPage from './pages/SecondPage/SecondPage'; 
import PremiumBackground from './components/PremiumBackground/PremiumBackground';

const App: React.FC = () => {
  return (
<div className="app-container" style={{ position: 'relative', width: '100%', overflowX: 'hidden',minHeight: '100vh' }}>
     
      <PremiumBackground />

    <Router>

      <Header />

      <main style={{ marginTop: '75px',position: 'relative', zIndex: 1 }}>

        <Routes>

          <Route path="/" element={<HomePage />} />

          <Route path="/page2" element={<SecondPage />} />

        </Routes>

      </main>

    </Router>

    </div>

  );
};

export default App;