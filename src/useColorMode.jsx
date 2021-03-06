import { createContext, useContext, useEffect, useState } from "react";

export const colorModes = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "default",
];

const ColorModeContext = createContext("default");
export const ColorModeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState("default");
  const storeUserPref = (pref) => {
    localStorage.setItem("theme", pref);
  };
  const getUserPref = () => {
    return localStorage.getItem("theme");
  };

  useEffect(() => {
    const userPref = getUserPref();
    if (userPref && colorModes.includes(userPref)) {
      rawSetColorMode(userPref);
    } else {
      setColorMode("default");
    }
  }, []);

  const setColorMode = (pref) => {
    rawSetColorMode(pref);
    storeUserPref(pref);
    const classesToRemove = colorModes.filter((color) =>
      document.documentElement.classList.contains(color)
    );
    for (const cls of classesToRemove) {
      document.documentElement.classList.remove(cls);
    }
    document.documentElement.classList.add(pref);
  };
  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

const useColorMode = () => useContext(ColorModeContext);
export default useColorMode;
