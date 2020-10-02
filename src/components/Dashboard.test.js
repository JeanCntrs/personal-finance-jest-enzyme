import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './Dashboard';

configure({ adapter: new Adapter() });

describe('Dashboard', () => {
    test('should show value', () => {
        const value = 1000;
        const wrapper = shallow(<Dashboard valor={value} />);
        const found = wrapper.text().includes(value);

        expect(found).toEqual(true);
    });
});

