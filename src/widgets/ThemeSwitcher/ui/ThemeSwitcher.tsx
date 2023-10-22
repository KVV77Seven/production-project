import styles from './ThemeSwitcher.module.scss'
import React from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import Changetheme from 'shared/assets/icons/theme-light-dark.svg'
import { classNames } from 'shared/lib/classNames/classNames'

interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme()
    return (
        <>
            <Changetheme onClick={toggleTheme} className={classNames(styles.ThemeSwitcher, {}, [className])}/>

        </>

    )
}
