import { useState } from 'react';
import { RecipeCard } from './components/RecipeCard.jsx'

const RECIPE = {
  name: "Pho",
  image_url: "https://static-task-assets.react-formula.com/239035.jpg",
};

export const UsingFetch = () => {
    const [ recipe, setRecipe ] = useState(null)
    return (
        <div className='flex flex-col justify-center items-center'>
            {recipe && <RecipeCard recipe={recipe}/>}
            <button
                onClick={() => setRecipe(RECIPE)}
                className='bg-blue-600 rounded-full p-4 px-7 text-white text-xl'
            >
                Get Random Recipe
            </button>
        </div>
    )
}