import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BreedsPage from "./pages/BreedsPage";
import HomePage from "./pages/HomePage";
import ThemeContext from "./ThemeContext";

const ThemeContextApp = () => {
  const [themeColor, setThemeColor] = useState("cyan");

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage />
            }
          />
          <Route
            path="/breeds"
            element={
              <BreedsPage
                themeColor={themeColor}
                setThemeColor={setThemeColor}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default ThemeContextApp;
