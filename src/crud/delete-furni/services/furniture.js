export const getAllFurnitures = () =>
  fetch(
    "https://api.react-formula.com/learning-api/demos/deleting-furni/furnitures"
  );

export const deleteFurnitureItem = (furnitureId) => {
  fetch(
    `https://api.react-formula.com/learning-api/demos/deleting-furni/furnitures/${furnitureId}`,
    { method: "DELETE" }
  );
};
