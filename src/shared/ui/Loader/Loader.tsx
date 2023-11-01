import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Loader.module.scss'

interface LoaderProps {
    className?: string
}
export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames(styles.Loader, {}, [styles.loaderContainer, className])}>
            <div className={styles.loader}>
                <div> </div>
            </div>
        </div>
    )
}
