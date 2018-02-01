import * as React from 'react';
import {mount} from 'enzyme';
import {TpaToggleSwitch} from './index';

describe('TpaToggleSwitch', () => {
  let wrapper;

  afterEach(() => wrapper.detach());

  it('should create an input element which represents the toggle', () => {
    wrapper = mount(
      <TpaToggleSwitch onChange={() => null}/>,
      {attachTo: document.createElement('div')}
    );
    expect(wrapper.find('input').length).toBe(1);
  });
});
