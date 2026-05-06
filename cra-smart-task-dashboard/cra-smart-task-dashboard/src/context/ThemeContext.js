import { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false); //

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  const value = useMemo(() => ({
    darkMode,
    toggleTheme
  }), [darkMode]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};