import { useState, useEffect } from "react";
import {FurnitureItem} from "./components/FurnitureItem";
import {getAllFurnitures} from "./services/furniture";

export const DeleteFurni = () => {
  const [furnitures, setFurnitures] = useState([]);

  const fetchFurnitures = () => {
    getAllFurnitures()
      .then((response) => response.json())
      .then((data) => setFurnitures(data));
  };

  useEffect(() => {
    fetchFurnitures();
  }, []);

  const furnitureItems = furnitures.map((furniture, idx) => (
    <FurnitureItem furniture={furniture} key={furniture.id}  fetchFurnitures={fetchFurnitures} />
  ));

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl">{furnitureItems}</div>
    </div>
  );
};