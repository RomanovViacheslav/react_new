import React from 'react';
import './App.css';
import Counter from './Counter';
import NameComponent from './NameComponent';
import Form from './Form';
import Input from './input';

const App = () => (
  <div>
    <h1>React app</h1>
    <NameComponent firstName="Viach" lastName="Romanson" />
    <Counter title="Сок" />
    <Counter title="Злак" />
    <NameComponent firstName="Don" lastName="Grechka" />
    <Form title="Auth">
      <Input />
    </Form>
    <Form title="Reg">
      <Input />
      <Input />
      <Input />
    </Form>
  </div>
);

export default App;
