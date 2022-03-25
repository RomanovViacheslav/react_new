import React from 'react';
import './App.css';
import Counter from './Counter';

import AuthContainer from './containers/AuthConteiner';
import MainContainer from './containers/MainContainer/Index';
import RegContainer from './containers/RegContainer';

const App = () => (
  <div>
    <AuthContainer />
    <RegContainer />
  </div>
);
export default App;
