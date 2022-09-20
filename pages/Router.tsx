import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import SideCategory from './Utils/SideCategory';
import '@css/Global.css';

const Main = loadable(() => import('@pages/Main'));
const Header = loadable(() => import('@pages/Utils/Header'));
const Auth = loadable(() => import('@pages/Auth'));
const Category = loadable(() => import('@pages/Category'));
const Article = loadable(() => import('@pages/Article'));
const CreateArticle = loadable(() => import('@pages/CreateArticle'));

const App = () => {
  return (
    <Router basename={process.env.NODE_ENV === 'production' ? 'q_board' : ''}>
      <Header />
      <div className="section">
        <SideCategory />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/signup" element={<Auth />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/article/:articleId" element={<Article />} />
          <Route path="/create/article" element={<CreateArticle />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
