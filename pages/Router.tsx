import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import "@css/Global.css"

const Main = loadable(() => import('@pages/Main'));
const Header = loadable(() => import('@pages/Utils/Header'));
const Auth = loadable(() => import('@pages/Auth'));

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;
