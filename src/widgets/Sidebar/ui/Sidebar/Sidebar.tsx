import styles from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';

interface SidebarProps {
    className?: string
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div data-testid='sidebar' className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <button data-testid='sidebar-toggle' onClick={onToggle}>Toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher/>

            </div>
        </div>
    );
};
