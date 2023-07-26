import React from 'react';
import { NavButtonStyles } from './NavButton.Styles';
import { Link } from 'react-router-dom';

export default function NavButton({ text, link, className }) {
  return (
    <NavButtonStyles className={className}>
      <Link to={link}>{text}</Link>
    </NavButtonStyles>
  );
}
