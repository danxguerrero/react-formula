import { useState } from 'react';
import { RecipeCard } from './components/RecipeCard.jsx'

const RECIPE = {
    name: "Pho",
    image_url: "https://static-task-assets.react-formula.com/239035.jpg",
};

export const UsingFetch = () => {

    const [recipe, setRecipe] = useState(null)
    const [fetching, setFetching] = useState(false)

    const handleFetch = async () => {
        setFetching(true)
        try {
            const res = await fetch('https://api.react-formula.com/learning-api/demos/using-fetch/recipes')
            if (!res.ok) {
                throw new Error(`HTTP error! status ${res.status}`);
            }

            const recipeData = await res.json();

            setRecipe(recipeData);
        } catch (err) {
            console.error("Unable to fetch recipe:", err)
        } finally {
            setFetching(false)
        }
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            {recipe && <RecipeCard recipe={recipe} />}
            {!fetching ? <button
                onClick={handleFetch}
                className='bg-blue-600 rounded-full p-4 px-7 text-white text-xl'
            >
                Get Random Recipe
            </button> : "Fetching..."}
        </div>
    )
}