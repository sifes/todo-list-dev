import React from 'react';
import dayIcon from '../../assets/day.svg';
import nightIcon from '../../assets/night.svg';
interface ThemeToggleProps {}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({}) => {
  console.log(nightIcon);
  return (
    <button className='toggle-theme' onClick={() => {}}>
      <img src={nightIcon.src} alt='toggle theme' />
    </button>
  );
};
