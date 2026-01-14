import { useState } from "react";
import * as FurnitureService from "./services/furniture";

export const FurnitureItem = (props) => {
  const { furniture, fetchFurnitures } = props;

  const [editingMode, setEditingMode] = useState(false);
  const [furnitureName, setFurnitureName] = useState(furniture.name);
  const [furnitureDescription, setFurnitureDescription] = useState(
    furniture.description
  );

  const handleUpdateClick = async () => {
    try {
      await FurnitureService.updateFurniture(furniture.id, {
        name: furnitureName,
        description: furnitureDescription,
      });
    } catch (err) {
      console.error(
        `There was an error updating item with id ${furniture.id}: ${err}`
      );
    } finally {
      fetchFurnitures();
      setEditingMode(false);
    }
  };

  return (
    <div className="flex m-8 border rounded-lg shadow-md border-stone-300 overflow-clip">
      <img
        src={furniture.image}
        className="object-cover w-48 h-48 border-r border-stone-300"
      />
      <div className="flex flex-col justify-between w-full px-6 py-4 bg-white">
        {editingMode ? (
          <>
            <input
              type="text"
              value={furnitureName}
              onChange={(e) => setFurnitureName(e.target.value)}
              className="border border-slate-200 text-2xl text-blue-500 rounded-md p-1"
            />
            <textarea
              value={furnitureDescription}
              onChange={(e) => setFurnitureDescription(e.target.value)}
              className="border border-slate-200 text-blue-500 rounded-md p-1"
            />
            <div className="flex justify-end">
              <button
                className="px-4 py-2 mx-1 bg-green-400 rounded-lg text-green-50 hover:bg-green-600"
                onClick={handleUpdateClick}
              >
                <i className="mr-1 fa-solid fa-check"></i>
                save
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="text-2xl text-stone-600">{furniture.name}</div>
            <div className="text-stone-500">{furniture.description}</div>
            <div className="flex justify-end">
              <button
                className="bg-blue-400 rounded-md py-2 px-4 text-blue-50 hover:bg-blue-600 mx-1"
                onClick={() => setEditingMode(true)}
              >
                <i className="mr-1 fa-solid fa-pencil"></i>
                edit
              </button>
              <button
                className="px-4 py-2 mx-1 bg-red-500 rounded-lg text-red-50 hover:bg-red-600"
                onClick={async () => {
                  await FurnitureService.deleteFurniture(furniture.id);
                  fetchFurnitures();
                }}
              >
                <i className="mr-1 fa-solid fa-trash"></i>
                delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
