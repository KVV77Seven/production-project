import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { PageLoader } from './PageLoader';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'widgets/PageLoader',
    component: PageLoader,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
