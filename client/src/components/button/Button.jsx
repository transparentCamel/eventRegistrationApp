import React from 'react';
import { ButtonStyles } from './Button.Styles';

export default function Button({ svg, backgroundColor, onClick }) {
  return (
    <ButtonStyles backgroundColor={backgroundColor} onClick={onClick}>
      <img src={svg} alt='Functional button' />
    </ButtonStyles>
  );
}
