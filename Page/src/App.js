import './App.css';
import HomePage from './pages/HomePage';
import EventDetail from './pages/EventDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/noticias/:slug" element={<EventDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
