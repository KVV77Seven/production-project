import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        to: '/'
    }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        children: 'AppLink'
    }
};
export const Dark: Story = {
    args: {
        children: 'AppLink'
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'AppLink'
    }
};
export const Inverted: Story = {
    args: {
        theme: AppLinkTheme.INVERTED,
        children: 'AppLink'
    }
};
