import './App.css';
import HomePage from './pages/HomePage';
import EventDetail from './pages/EventDetail';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<EventDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
