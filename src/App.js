import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ModulePage from './Components/ModulePage';
import InstructorPage from './Components/InstructorPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Navigation links */}
        <nav>
          <ul>
            <li>
              <Link to="/" className="HomeIcn">Home</Link>
            </li>
            <li>
              <Link to="/modules" className="HomeIcn">Modules</Link>
            </li>
            <li>
              <Link to="/instructor" className="HomeIcn">Instructor</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/modules" element={<ModulePage />} />
          <Route path="/instructor" element={<InstructorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
