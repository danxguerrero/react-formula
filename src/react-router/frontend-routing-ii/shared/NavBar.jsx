import { Link, useLocation } from "react-router-dom";
import clsx from 'clsx';

export const NavBar = () => {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <nav className="bg-amber-50 flex justify-center font-opensans">
      <div className="max-w-5xl w-full flex justify-between items-center">
        <Link to='/' className="font-bubblegum text-green-800 text-2xl flex flex-col items-center">
          <img
            className="w-32 mb-2"
            src="https://static-task-assets.react-formula.com/102167.png"
          />
          Carl's Cat Sitters
        </Link>
        <div className="flex justify-around w-1/3 text-lg text-amber-900/40">
          <Link to='/' className={clsx("mx-3 hover:text-amber-600", location.pathname === '/' && "text-amber-600")}>
            <i className="fa-solid fa-house mr-2"></i>Home
          </Link>
          <Link to='/about' className={clsx("mx-3 hover:text-amber-600", location.pathname === '/about' && "text-amber-600")}>
            <i className="fa-solid fa-comment mr-2"></i>About
          </Link>
          <Link to='/sign-in' className="hover:text-amber-600">
            <i className="fa-solid fa-arrow-right-to-bracket mr-2"></i>Sign-in
          </Link>
        </div>
      </div>
    </nav>
  );
};