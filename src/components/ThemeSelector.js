import { useTheme } from "../hooks/useTheme"
import modeIcon from '../assets/mode-icon.svg'

// styles
import './ThemeSelector.css'

const themeColors = ['#58249c', '#249c6b', '#b70233']

export default function ThemeSelector() {
    // We grab the changeColor and changeMode functions using the useTheme hooks which is basically just getting the context for us
    // We also grab the actual mode (default is "dark")
    const { changeColor, changeMode, mode } = useTheme()

    const toggleMode = () => {
        // This first evaluates if mode = "dark". If it is true, then return the value on the left (light). If it is false, then return the value on the right (dark)
        // Then it fires the function with either dark or light as a value
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }
    console.log(mode)

    return (
        <div className="theme-selector">
            <div className="mode-toggle">
                <img
                    onClick={toggleMode}
                    src={modeIcon}
                    alt="dark/light toggle icon"
                    style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
                />
            </div>
            <div className="theme-buttons">
                {/* We map through the different colors in the themeColor array and create a div for each one. When we click on any of them we call the changeColor function to update the color state
                and when doing so we update the color of our navBar */}
                {themeColors.map(color => (
                    <div
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{ background: color }}
                    />
                ))}
            </div>
        </div>
    )
}
