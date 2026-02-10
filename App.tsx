import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './components/Home';
import Login from './components/Login';
import CopyPage from './components/CopyPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-white font-sans relative">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/copy" element={<CopyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;