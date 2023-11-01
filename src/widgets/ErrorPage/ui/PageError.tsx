import { classNames } from 'shared/lib/classNames/classNames'
import styles from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface ErrorPageProps {
    className?: string
}
export const PageError = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation()

    function reloadPage () {
        location.reload()
    }
    return (
        <div className={classNames(styles.ErrorPage, {}, [className])}>
            {t('Ошибка')}
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    )
}
