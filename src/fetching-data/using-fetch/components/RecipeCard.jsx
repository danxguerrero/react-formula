export const RecipeCard = ({recipe}) => {
    return (
        <div className='m-8'>
            <div className='text-3xl text-yellow-100 bg-yellow-500 py-4 text-center rounded-t-lg'>{recipe.name}</div>
            <img src={recipe.image_url} className='object-cover h-[320px] w-[400px] rounded-b-lg' />
        </div>
    )
}