import { classNames } from './classNames';

describe('classNames', function () {
    test('with only first param', () => {
        expect(classNames('test')).toBe('test');
    });
    test('with additional param', () => {
        const expected = 'test test2 test3';
        expect(classNames('test', {}, ['test2', 'test3'])).toBe(expected);
    });
    test('with mods', () => {
        const expected = 'test hovered';
        expect(classNames('test', { hovered: true, scrollable: false })).toBe(expected);
    });
});
