import React, { useState } from 'react';
import MainPage from '../../components/pages/MainPage';
import shugar from '../../shuga.png';
import Card from '../../components/common/Card/Card';
import FooterCard from '../../components/common/FooterCard/FooterCard';
import FooterCardAbsence from '../../components/common/FooterCardAbsence/FooterCardAbsence';
import grecha from '../../Grecha.png';
import flour from '../../flour.png';
import noodles from '../../noodles.png';
import { data } from '../../helpers';

const MainContainer = () => {
  const [visible, setVisible] = useState(false);

  const handler = () => {
    setVisible((prev) => !prev);
  };

  return (
    <MainPage>
      <Card title="Сахар" img={shugar} alt="сахар" unit="900гр" price="299$">
        <FooterCardAbsence />
      </Card>
      <Card title="Гречневая ядрица" img={grecha} alt="гречка" unit="450гр" price="899$">
        <FooterCard />
      </Card>
      <Card title="Мука пшеничная" img={flour} alt="мука" unit="2кг" price="199$">
        <FooterCard />
      </Card>
      <Card title="Лапша БП" img={noodles} alt="лапша" unit="60гр" price="79$">
        <FooterCardAbsence />
      </Card>
      {visible ? (
        data.map((el) => (
          <Card
            key={el.id}
            title={el.name}
            img={shugar}
            alt={el.age}
            unit={el.age}
            price={el.name}
          />
        ))
      ) : (
        <h2>список скрыт</h2>
      )}
      <button type="button" onClick={handler}>
        ffff
      </button>
    </MainPage>
  );
};

export default MainContainer;
