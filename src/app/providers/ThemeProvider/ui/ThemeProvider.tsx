import React, { type FC, type PropsWithChildren, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, type ThemeContextProps } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)
    const defaultProps = useMemo<ThemeContextProps>(() => ({
        theme,
        setTheme: changeThemeHandler
    }), [theme])

    function changeThemeHandler (newTheme: Theme) {
        setTheme(newTheme)
    }
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
