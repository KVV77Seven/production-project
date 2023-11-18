import 'app/styles/index.scss';
import { type Story } from '@storybook/react';
import { type Theme } from 'app/providers/ThemeProvider';
import styles from './ThemeDecorator.module.scss';

export const ThemeDecorator = (theme: Theme) => (Story: Story) => (
    <div className={`app ${theme} ${styles.ThemeDecorator}`}>
        <Story/>
    </div>
);
