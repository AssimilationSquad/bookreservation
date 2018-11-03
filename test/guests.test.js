import { shallow, mount, render } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Guests from '../client/guests.jsx';
import Calendar from '../client/calendar.jsx';


describe('<Guests />', () => {
  it('renders 6 <div> components', () => {
    const wrapper = shallow(<Guests />);
    expect(wrapper.find('div')).toHaveLength(6);
  });

  it('looks the same as before', () => {
    const tree = renderer.create(<Guests />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Calendar />', () => {
  it('renders a calendar', () => {
    const wrapper = shallow(<Calendar year="2018" month="10" handleMonthChange={() => {}} />);
    expect(wrapper.find('td').length).toBeGreaterThan(30);
  });
});