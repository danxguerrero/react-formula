import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OtherPage from "./pages/OtherPage";

const UseEffectCleanUp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/other" element={<OtherPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default UseEffectCleanUp;
