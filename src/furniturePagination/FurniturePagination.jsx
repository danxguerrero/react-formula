import FurnitureItem from "./components/FurnitureItem";
import furnitures from "./data/furnitures";

const FurniturePagination = () => {
  const furnitureItems = furnitures.map((furniture, idx) => (
    <FurnitureItem furniture={furniture} key={idx} />
  ));

  return (
    <div className="flex flex-col items-center py-64 bg-stone-100">
      <div className="mx-4 mb-10 text-4xl text-stone-600 ">Autumn's Fabulous Furniture</div>
      <div className="w-full max-w-2xl">{furnitureItems}</div>
    </div>
  );
};

export default FurniturePagination;
