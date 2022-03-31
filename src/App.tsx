import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Counter from './Counter';

import AuthContainer from './containers/AuthConteiner';
import MainContainer from './containers/MainContainer/Index';
import RegContainer from './containers/RegContainer';
import PageWrapper from './components/common/PageWrapper';
import OneCardContainer from './containers/OneCardContainer';
import ReviewsContainer from './containers/ReviewsContainer';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route index element={<h1>MAIN PAGE</h1>} />
      <Route path="products" element={<MainContainer />} />
      <Route path="cards" element={<Navigate to="/products" replace />} />
      <Route path="products/:id" element={<OneCardContainer />} />
      <Route path="products/:id/reviews" element={<ReviewsContainer />} />
      <Route path="auth" element={<AuthContainer />} />
      <Route path="reg" element={<RegContainer />} />
      <Route path="*" element={<h1>NOT FOUND </h1>} />
    </Route>
  </Routes>
);
export default App;
