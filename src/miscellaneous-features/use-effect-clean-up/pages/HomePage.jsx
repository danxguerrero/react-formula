import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="p-8">
      <div className="text-xl">this is the home page</div>
      <Link className="my-10 text-blue-400 underline" to="/other">
        go to other page
      </Link>
    </div>
  );
};

export default HomePage;
