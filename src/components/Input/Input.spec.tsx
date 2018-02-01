import * as React from 'react';
import {mount} from 'enzyme';
import {TpaInput} from './index';

describe('TpaInput', () => {
  let wrapper;

  afterEach(() => wrapper.detach());

  it('should create an input element', () => {
    wrapper = mount(
      <TpaInput onChange={() => null}/>,
      {attachTo: document.createElement('div')}
    );
    expect(wrapper.find('input').length).toBe(1);
  });
});
