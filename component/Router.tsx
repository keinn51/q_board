import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const Main = loadable(() => import('@component/Main'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
    </Router>
  );
};

export default App;
