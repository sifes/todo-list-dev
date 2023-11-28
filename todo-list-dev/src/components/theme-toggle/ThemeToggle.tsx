import React from 'react';
import dayIcon from '../../assets/day.svg';
import nightIcon from '../../assets/night.svg';
import { useTheme } from '../../hooks/useTheme';
interface ThemeToggleProps {}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({}) => {
  const theme = useTheme();
  return (
    <button
      className='toggle-theme'
      onClick={() => {
        theme.setIsDark(!theme.isDark);
      }}
    >
      <img src={theme.isDark ? dayIcon : nightIcon} alt='toggle theme' />
    </button>
  );
};
