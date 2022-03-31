import shugar from './shuga.png';
import grecha from './Grecha.png';
import flour from './flour.png';
import noodles from './noodles.png';

/* eslint-disable import/prefer-default-export */
export const data = [
  {
    id: 1,
    title: 'Сахар Русский',
    wt: '950гр',
    price: '100$',
    stock: true,
    img: `${shugar}`,
    description:
      'Сахарный песок от компании Русский сахар изготовлен из качественного сырья - сахарной свеклы. Отлично подойдет как ингредиент для приготовления пищи и ежедневного употребления с различными напитками.',
  },
  {
    id: 2,
    title: 'Гречневая крупа',
    wt: '1кг',
    price: '92$',
    stock: true,
    img: `${grecha}`,
    description:
      'Изготовлен из гречихи. Гречиха для этой крупы была выращена нами без минеральных удобрений. А также ГМО, ядохимикатов, стимуляторов роста и химических агентов. Покупая этот продукт, вы делаете выбор в пользу своего здоровья. Содержит глютен. гречка, выращена без глифосата и удобрений',
  },
  {
    id: 3,
    title: 'Мука пшеничная',
    wt: '800гр',
    price: '189$',
    stock: false,
    img: `${flour}`,
    description: 'Мука пшеничная хлебопекарная высший сорт. Не содержит ГМО',
  },
  {
    id: 4,
    title: 'Лапша БП',
    wt: '100гр',
    price: '94$',
    stock: false,
    img: `${noodles}`,
    description: 'Это отличный вариант сытного обеда или ужина',
  },
];
