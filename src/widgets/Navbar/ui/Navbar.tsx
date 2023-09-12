import React from 'react';
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss"

interface NavbarProps {
    className?: string;
}
export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(styles.navbar)}>
            <div className={styles.links}>
                <Link to={'/'} className={styles.link}>Main</Link>
                <Link to={'/about'} className={styles.link}>About</Link>
            </div>

        </div>
    );
};