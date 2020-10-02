import reducer, { agregar, eliminar } from './finanzas';

describe('Duck finance', () => {
    describe('Action creators', () => {
        test('add', () => {
            const result = agregar(1);
            expect(result).toEqual({
                type: 'AGREGAR',
                payload: 1
            });
        });

        test('remove', () => {
            const result = eliminar(1);
            expect(result).toEqual({
                type: 'ELIMINAR',
                index: 1
            });
        });
    });

    describe('Reducer', () => {
        test('add', () => {
            const result = reducer([1], {
                type: 'AGREGAR',
                payload: 2
            });
            expect(result).toEqual([1, 2]);
        });

        test('remove', () => {
            const result = reducer([1, 2, 3], {
                type: 'ELIMINAR',
                index: 0
            });
            expect(result).toEqual([2, 3]);
        });

        test('default', () => {
            const result = reducer(1, {
                type: 'DEFAULT'
            });
            expect(result).toEqual(1);
        });
    });
});
