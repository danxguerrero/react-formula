export const RestaurantItem = ({ restaurant }) => {

    const costSymbols = "$".repeat(restaurant.cost)

    return (
        <div className='m-3 shadow-md bg-white relative'>
            <img src={restaurant.image} className='w-56 h-48 object-cover' />
            {restaurant?.promotion && <div className='absolute top-3 left-0 text-white text-xs bg-rose-500 px-3 py-1 rounded-r-lg'>promotion</div>}
            <div className='p-3'>
                <div className="flex justify-between">
                    <div>{restaurant.name}</div>
                    <div className='text-rose-500 '>
                        <i className='fa-solid fa-star mr-1' />
                        {restaurant.rating}
                    </div>
                </div>
                <div className="mt-2 text-stone-500">
                    <p>{restaurant.location}</p>
                    <p>{costSymbols}</p>
                </div>
            </div>
        </div>
    )
}