import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'
import React, { type ButtonHTMLAttributes } from 'react'

export enum ThemeButton {
    CLEAR = 'clear',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
    children?: React.ReactNode
}
export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props
    return (
        <button className={classNames(styles.Button, {}, [className, styles[theme]])} {...otherProps}>
            {children}
        </button>
    )
}
