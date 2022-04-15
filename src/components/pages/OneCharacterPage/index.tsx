import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormButton from '../../common/Form/FormButton/FormButton';

type OneCharacterPropsType = {
  characterData: any;
};

const OneCharacterPage = ({ characterData }: OneCharacterPropsType) => {
  const navigate = useNavigate();
  const handler = () => {
    navigate('/characters', { state: { isOpen: true } });
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
      <FormButton text="НАЗАД" onClick={handler} />
    </div>
  );
};

export default OneCharacterPage;
