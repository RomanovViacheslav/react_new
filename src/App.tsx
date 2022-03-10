import React from 'react';
import './App.css';
import Counter from './Counter';
import NameComponent from './NameComponent';
import Form from './Form';
import Input from './input';
import Card from './Card';
import shugar from './shuga.png';
import grecha from './Grecha.png';
import flour from './flour.png';
import FooterCard from './FooterCard';
import FooterCardAbsence from './FooterCardAbsence';
import noodles from './noodles.png';

const App = () => (
  <div>
    <div className="container">
      <Card title="Сахар" img={shugar} alt="сахар" unit="900гр" price="299$">
        <FooterCard />
      </Card>
      <Card title="Гречневая ядрица" img={grecha} alt="гречка" unit="450гр" price="899$">
        <FooterCard />
      </Card>
      <Card title="Мука пшеничная" img={flour} alt="мука" unit="2кг" price="199$">
        <FooterCardAbsence />
      </Card>
      <Card title="Лапша БП" img={noodles} alt="лапша" unit="60гр" price="79$">
        <FooterCardAbsence />
      </Card>
    </div>
  </div>
);

export default App;
