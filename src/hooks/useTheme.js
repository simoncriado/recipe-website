import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const useTheme = () => {
    // useTheme just wraps us the ThemeContext
    const context = useContext(ThemeContext)

    // useTheme does this check
    if (context === undefined) {
        throw new Error("useTheme() must be used inside a ThemeProvider")
    }

    // and it returns us the context and that is why we can get the color value inside the navBar
    return context
}