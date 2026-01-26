const DessertItem = (props) => {
  const { dessert } = props;
  
  return (
    <div className="flex my-4">
      <img className="object-cover w-40 mr-4" src={dessert.image} />
      <div>
        <h2 className="mb-2 text-xl text-gray-600">{dessert.name}</h2>
        <p className="text-gray-500">{dessert.description}</p>
      </div>
    </div>
  );
};

export default DessertItem;
