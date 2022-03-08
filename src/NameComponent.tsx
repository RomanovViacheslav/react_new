import React, { SyntheticEvent } from 'react';

type NameComponentPropsType = {
  firstName: string;
  lastName: string;
};

const NameComponent = (props: NameComponentPropsType) => {
  const { firstName, lastName } = props;
  const handler = (event: SyntheticEvent) => {
    console.log(event.currentTarget, 'event.target');
  };
  return (
    <div className="wrapper">
      <p className="text">{firstName}</p>
      <p className="text">{lastName}</p>
      <button type="button" onClick={handler}>
        KILL YOU
      </button>
    </div>
  );
};

export default NameComponent;
