import {render, screen} from '@testing-library/react';
import {Button, ThemeButton} from './Button';
import '@testing-library/jest-dom';

describe('Button', function () {
    test('Test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Test clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
