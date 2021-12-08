import { createContext, useReducer } from "react";

export const ThemeContext = createContext()

// This function gets the previous state and the action (which is the dispatch inside the changeColor or changeMode function)
const themeReducer = (state, action) => {
    // We check the action type and if it is CHANGE_COLOR we return a new state with the new color. Same for CHANGE_MODE
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload }
        case 'CHANGE_MODE':
            return { ...state, mode: action.payload }
        default:
            return state
    }
}

export function ThemeProvider({ children }) {
    // Here we have our context and our ThemeProvider with an initial state of color "purple"
    const [state, dispatch] = useReducer(themeReducer, {
        color: '#58249c',
        mode: 'dark'
    })

    // Function to change the state (in this case just the color)
    const changeColor = (color) => {
        // We dispatch an action with a specific type and the payload which is the color coming from the ThemeSelector.js
        // This then fires the themeReducer function
        dispatch({ type: 'CHANGE_COLOR', payload: color })
    }
    const changeMode = (mode) => {
        dispatch({ type: 'CHANGE_MODE', payload: mode })
    }

    // custom logic

    return (
        // We return the state color (purple) and the function as the value for the Provider (which wraps our entire application in index.js so our entire app has access to this values)
        <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
            {children}
        </ThemeContext.Provider>
    )
}