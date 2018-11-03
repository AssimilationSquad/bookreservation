import { shallow, mount, render } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Calendar from '../client/calendar.jsx';


describe('<Calendar />', () => {
  let props;
  let mountedCalendar;
  const calendar = () => {
    if (!mountedCalendar) {
      mountedCalendar = mount(
        <Calendar {...props} />
      );
    }
    return mountedCalendar;
  };

  beforeEach(() => {
    props = {
      year: undefined,
      month: undefined,
      handleMonthChange: undefined
    };
    mountedCalendar = undefined;
  });

  it('renders a calendar', () => {
    const wrapper = shallow(<Calendar year="2018" month="10" handleMonthChange={() => { }} />);
    expect(wrapper.find('td').length).toBeGreaterThan(30);
  });

  it('renders the right calendar', () => {
    const wrapper = shallow(<Calendar year="2018" month="11" handleMonthChange={() => { }} />);
    expect(wrapper.find('td').length).toEqual(37);
    const wrapper2 = shallow(<Calendar year="2019" month="11" handleMonthChange={() => { }} />);
    expect(wrapper2.find('td').length).toEqual(31);
  });
});