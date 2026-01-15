import restaurants from "./data/restaurants";
import { RestaurantItem } from "./components/RestaurantItem";

export const MunchCentral = () => {
    const restaurantItems = restaurants.map((restaurant, idx) => <RestaurantItem key={idx} restaurant={restaurant} /> );

    return (
        <div className='w-full m-4 relative'>
            <div className='flex flex-col items-center h-full'>
                <div className='flex items-center'>
                    <img src='https://static-task-assets.react-formula.com/996965.png' className='m-3 h-24 w-24'/>
                    <h1 className="text-4xl text-neutral-600">Munch Central</h1>
                </div>
                <div className='w-full max-w-4xl flex flex-wrap justify-center h-full'>
                    {restaurantItems}
                </div>
            </div>
        </div>
    )
}