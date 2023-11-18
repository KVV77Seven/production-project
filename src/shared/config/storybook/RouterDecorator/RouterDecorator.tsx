import { BrowserRouter } from 'react-router-dom';

interface RouterDecoratorProps {
    children?: React.ReactNode
}

export const RouterDecorator = ({ children }: RouterDecoratorProps) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    );
};
