import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Finanzas from './Finanzas';

configure({ adapter: new Adapter() });

describe('Finanzas', () => {
    test('should call eliminarFinanza onClick', () => {
        const finanzas = [
            { desc: 'description 1', cant: 100 },
            { desc: 'description 2', cant: 200 }
        ];
        const eliminarFinanza = jest.fn();
        const wrapper = shallow(<Finanzas finanzas={finanzas} eliminarFinanza={eliminarFinanza} />);

        wrapper.find('button').at(0).simulate('click');
        expect(eliminarFinanza.mock.calls).toEqual([[0]]); // was called with index 0

        const found1 = wrapper.text().includes('description 1');
        const found2 = wrapper.text().includes('description 2');

        expect(found1).toEqual(true);
        expect(found2).toEqual(true);
    });
});
