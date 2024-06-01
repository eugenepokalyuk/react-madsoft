import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ResultPage from '../../pages/ResultPage';
import TestPage from '../../pages/TestPage';
import WelcomePage from '../../pages/WelcomePage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
};

export default App;