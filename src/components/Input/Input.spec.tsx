import * as React from 'react';
import {mount} from 'enzyme';
import {Input} from './index';

describe('Input', () => {
  let wrapper;

  afterEach(() => wrapper.detach());

  it('should create an input element', () => {
    wrapper = mount(
      <Input onChange={() => null}/>,
      {attachTo: document.createElement('div')}
    );
    expect(wrapper.find('input').length).toBe(1);
  });
});
