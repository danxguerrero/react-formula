import { deleteFurnitureItem } from './services/furniture'

export const FurnitureItem = (props) => {
  const { furniture, fetchFurnitures } = props;

  return (
    <div className="flex m-8 border rounded-lg shadow-md border-stone-300 overflow-clip">
      <img
        src={furniture.image}
        className="object-cover w-48 h-48 border-r border-stone-300"
      />
      <div className="flex flex-col w-full px-6 py-4 bg-white">
        <div className="mb-4 text-2xl text-stone-600">{furniture.name}</div>
        <div className="text-stone-500">{furniture.description}</div>
      <div className="flex justify-end mt-5">
        <button
          onClick={async () => {
            await deleteFurnitureItem(furniture.id)
            fetchFurnitures()
          }}
          className="bg-red-500 text-white py-2 px-3 rounded-md"
        >
          delete
        </button>
      </div>
      </div>
    </div>
  );
};