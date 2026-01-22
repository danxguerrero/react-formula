import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { PageOne } from "./components/PageOne.jsx";
import { PageTwo } from "./components/PageTwo.jsx";

export const FrontendRouting = () => {
  return (
    <BrowserRouter>
      <div className="h-screen">
        <div className="flex justify-around p-8 text-xl text-blue-300 w-full bg-blue-700">
          <Link to='/'>Home</Link>
          <Link to='/one'>One</Link>
          <Link to='/two'>Two</Link>
        </div>
        <Routes>
          <Route path="/" element={<div className="flex justify-center m-10">time to learn react router</div>}/>
          <Route path="/one" element={<PageOne />} />
          <Route path="/two" element={<PageTwo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};