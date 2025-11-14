import restaurants from "./data/restaurants";


export const MunchCentral = () => {
    const restaurantItems = restaurants.map((restaurant, idx) => <div key={idx}>{restaurant.name}</div>);
    return (
        <div className='border border-red-500 flex justify-center items-center m-5'>
            <div className='w-full max-w-5xl flex flex-col justify-center items-center'>
                <div className='flex items-center'>
                <img src='https://static-task-assets.react-formula.com/996965.png'/>
                <h1 className="text-4xl">Munch Central</h1>
                </div>
                {restaurantItems}
            </div>
        </div>
    )
}