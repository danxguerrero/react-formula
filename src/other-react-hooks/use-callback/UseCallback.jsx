import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Example1 from "./pages/Example1";
import Example2 from "./pages/Example2";

const UseCallback = () => {
  return (
    <BrowserRouter>
      <div className="flex justify-around py-8 text-lg shadow-lg text-rose-300 bg-rose-700">
        <Link to="/">Example 1</Link>
        <Link to="/example-2">Example 2</Link>
      </div>
      <Routes>
        <Route path="/" element={<Example1 />} />
        <Route path="/example-2" element={<Example2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default UseCallback;