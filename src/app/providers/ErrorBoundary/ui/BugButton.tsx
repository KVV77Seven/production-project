import { classNames } from 'shared/lib/classNames/classNames';
import styles from './BugButton.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
    className?: string
}
export const BugButton = ({ className }: BugButtonProps) => {
    const [hasError, setHasError] = useState(false);
    const { t } = useTranslation();
    const toggleClick = () => {
        setHasError(!hasError);
    };
    useEffect(() => {
        if (hasError) {
            throw new Error('abrakadabra');
        }
    }, [hasError]);
    return (
        <Button
            className={classNames(styles.BugButton, {}, [className])}
            onClick={toggleClick}>
            {t('Крашнуть сайт')}
        </Button>
    );
};
