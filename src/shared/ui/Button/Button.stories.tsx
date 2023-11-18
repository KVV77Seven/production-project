import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'test'
    }
};
export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'test'
    }
};

export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'test'
    }
};

export const OutlineDark: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'test'
    }
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
