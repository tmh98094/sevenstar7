import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import CrocoExclusive from './pages/CrocoExclusive';
import PartnerProgram from './pages/PartnerProgram';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import GameLibrary from './pages/GameLibrary';
import FloatingCTA from './components/FloatingCTA';
import MobileBottomNav from './components/MobileBottomNav';
import { LanguageProvider } from './src/contexts/LanguageContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-gold selection:text-brand-black flex flex-col">
      <ScrollToTop />

      <Header />

      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GameLibrary />} />
          <Route path="/croco-exclusive" element={<CrocoExclusive />} />
          <Route path="/partner" element={<PartnerProgram />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:blogId" element={<BlogDetail />} />

          {/* Dynamic Route for Games Categories (Slots, Live, Sports, etc) */}
          <Route path="/:categoryId" element={<CategoryPage />} />
        </Routes>
      </main>

      <Footer />
      <FloatingCTA />
      <MobileBottomNav />
    </div>
  );
};

import { HelmetProvider } from 'react-helmet-async';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <AppContent />
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
};

export default App;