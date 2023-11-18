import 'app/styles/index.scss';

interface StyleDecoratorProps {
    children?: React.ReactNode
}
export const StyleDecorator = ({ children }: StyleDecoratorProps) => {
    return (
        <>
            {children}
        </>
    );
};
