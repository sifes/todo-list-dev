import React from 'react';
import dayIcon from '../../assets/day.svg';
import nightIcon from '../../assets/night.svg';
import { useTheme } from 'next-themes';
interface ThemeToggleProps {}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({}) => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <button
      className='toggle-theme'
      onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
    >
      <img src={theme === 'light' ? nightIcon.src : dayIcon.src} alt='toggle theme' />
    </button>
  );
};
