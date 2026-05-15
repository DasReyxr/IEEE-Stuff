import './App.css';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import EventDetail from './pages/EventDetail';
import ContactPage from './pages/AboutUs';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  useEffect(() => {
    const { pathname, hash, search, origin, href } = window.location;

    if (pathname !== '/') {
      const normalizedHash = hash && hash.startsWith('#/')
        ? hash
        : `#${pathname}${search}`;
      const target = `${origin}/${normalizedHash}`;

      if (target !== href) {
        window.location.replace(target);
      }
    }
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/:slug" element={<EventDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
