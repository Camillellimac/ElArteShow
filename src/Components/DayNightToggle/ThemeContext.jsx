// import { createContext, useContext, useState } from "react";



// const ThemeContext = createContext();

// export const useTheme = () => {
//   return useContext(ThemeContext);
// };

// export const ThemeProvider = ({ children }) => {
//   const [nightTheme, setNightTheme] = useState(false);

//   const switchTheme = () => {
//     setNightTheme((prevTheme) => !prevTheme);
//   };

//   const value = {
//     nightTheme,
//     switchTheme,
//   };

//   return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
// };