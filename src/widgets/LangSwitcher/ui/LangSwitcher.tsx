import { classNames } from 'shared/lib/classNames/classNames'
import styles from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import React from 'react'

interface LangSwitcherProps {
    className?: string
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()
    function toggleLang () {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <div className={classNames(styles.LangSwitcher, {}, [className])}>
            <h1>{t('Тестовый пример')}</h1>
            <button onClick={toggleLang}>{t('Перевести')}</button>
        </div>
    )
}
