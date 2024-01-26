import { createContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
  const storedDarkMode = localStorage.getItem("isDarkMode");
  const initialDarkMode = storedDarkMode ? storedDarkMode === "true" : false;

  const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;
