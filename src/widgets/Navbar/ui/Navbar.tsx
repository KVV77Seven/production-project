import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string;
}
export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(styles.navbar)}>
            <div className={styles.links}>
                <AppLink to={'/'} className={styles.link} theme={AppLinkTheme.INVERTED}>{t("Главная")}</AppLink>
                <AppLink to={'/about'} className={styles.link} theme={AppLinkTheme.INVERTED}>{t("О сайте")}</AppLink>
            </div>

        </div>
    );
};