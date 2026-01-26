import { useState, useEffect, useCallback } from "react";
import DessertItem from "./DessertItem";

const Example2 = () => {
  const [desserts, setDesserts] = useState([]);

  const fetchDesserts = useCallback(async () => {
    const response = await fetch(
      "https://api.react-formula.com/learning-api/demos/use-callback/desserts"
    );

    setDesserts(await response.json());
  }, []);

  useEffect(() => {
    fetchDesserts();
  }, [fetchDesserts]);

  return (
    <div className="flex justify-center h-screen">
      <div className="w-full max-w-lg py-20">
        {desserts.map((dessert) => (
          <DessertItem key={dessert.id} dessert={dessert} />
        ))}
      </div>
    </div>
  );
};

export default Example2;
