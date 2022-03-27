import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Counter from './Counter';

import AuthContainer from './containers/AuthConteiner';
import MainContainer from './containers/MainContainer/Index';
import RegContainer from './containers/RegContainer';

const App = () => (
  <Routes>
    <Route path="/" element={<MainContainer />} />
    <Route path="/auth" element={<AuthContainer />} />
    <Route path="/reg" element={<RegContainer />} />
  </Routes>
);
export default App;
