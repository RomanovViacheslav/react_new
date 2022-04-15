import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormButton from '../../common/Form/FormButton/FormButton';

type OneCharacterPropsType = {
  characterData: any;
};

const OneCharacterPage = ({ characterData }: OneCharacterPropsType) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handlerNext = () => {
    const next = Number(id) + 1;
    navigate(`/characters/${next}`);
  };
  const handlerPrevious = () => {
    const previous = Number(id) - 1;
    if (previous === 0) {
      return;
    }

    navigate(`/characters/${previous}`);
  };
  return (
    <div>
      <h1>Персонаж:</h1>
      <h2>{characterData?.name}</h2>
      <img src={characterData?.image} alt="картинка" />
      <div>
        <h3>{characterData?.species}</h3>
        <h3>{characterData?.gender}</h3>
      </div>
      <FormButton text="← предыдущий" onClick={handlerPrevious} />
      <FormButton text="следующий →" onClick={handlerNext} />
    </div>
  );
};

export default OneCharacterPage;
