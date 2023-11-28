import React, { createContext, ReactNode } from 'react';

type isDark = boolean;
interface ThemeContextProps {
  isDark: isDark;
  setIsDark: (theme: isDark) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = React.useState<isDark>(true);

  return <ThemeContext.Provider value={{ isDark, setIsDark }}>{children}</ThemeContext.Provider>;
};
