import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SignInPage from "./pages/SignInPage";

export const FrontendRoutingII = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/sign-in' element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};