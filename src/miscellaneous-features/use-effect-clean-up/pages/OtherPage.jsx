import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OtherPage = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("time is up");
      setShowMessage(true);
    }, 3000);

    return () => {
      clearTimeout(timeoutId)
    }
  }, []);

  return (
    <div className="p-8">
      <div className="text-xl">this is the other page</div>
      <Link className="my-10 text-blue-400 underline" to="/">
        go to home page
      </Link>
      {showMessage && <div className="text-3xl text-red-500">time is up</div>}
      <div></div>
    </div>
  );
};

export default OtherPage;
