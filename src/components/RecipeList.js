import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

// styles
import './RecipeList.css'

export default function RecipeList({ recipes }) {
    const { mode } = useTheme()

    if (recipes.length === 0) {
        return <div className="error">No recipes to load...</div>
    }

    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <div key={recipe.id} className={`card ${mode}`}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make</p>
                    {/* This creates a new string for us. From the method string it makes a new string from position 0 to 100 */}
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${recipe.id}`} >Cook this</Link>
                </div>
            ))}
        </div>
    )
}
