import { shallow, mount, render } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Guests from '../client/guests.jsx';


describe('<Guests />', () => {
  let props;
  let mountedGuests;
  const guests = () => {
    if (!mountedGuests) {
      mountedGuests = mount(
        <Guests {...props} />
      );
    }
    return mountedGuests;
  };

  beforeEach(() => {
    props = {
      adults: 1,
      children: 0,
      infants: 0
    };
    mountedGuests = undefined;
  });

  it('renders 6 <div> components', () => {
    const wrapper = shallow(<Guests {...props} />);
    expect(wrapper.find('div')).toHaveLength(6);
  });

  xit('looks the same as before', () => {
    const tree = renderer.create(<Guests {...props}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  xit("contains everything else that gets rendered", () => {
    const divs = guests().find("div");
    const wrappingDiv = divs.first();

    expect(wrappingDiv.children()).toEqual(guests().children());
  });

  it("should display number of adults that were passed as props", () => {
    const div = guests().find('div.age-group#adults').first();
    console.log(Object.keys(div));
    // find the span with the adult and see if it's 1;
  });
});

