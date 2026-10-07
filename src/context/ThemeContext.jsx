/* eslint-disable react-refresh/only-export-components */


import { useContext, createContext, useState } from 'react';

const themeContext = createContext();


function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}


function useTheme() {
  const context = useContext(themeContext);
  if (context === undefined) {
    throw new Error('useTheme doit être utilisé dans un <ThemeProvider>');
  }
  return context;
}

export { ThemeProvider, useTheme };
