import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

// components
import SearchBar from './SearchBar'

// styles
import './Navbar.css'

export default function Navbar() {
    // We use the useTheme hooks to get the color from ThemeContext.js
    const { color } = useTheme()

    return (
        // We get that color and set it as the background of our navBar
        <div className="navbar" style={{ background: color }}>
            <nav>
                <Link to="/" className="brand">
                    <h1>Cooking Ninja</h1>
                </Link>
                <SearchBar />
                <Link to="/create">
                    Create Recipe
                </Link>
            </nav>
        </div>
    )
}
