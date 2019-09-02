import * as React from 'react';
import { mount } from 'enzyme';

import { withForwardRef, WithForwardRefProps } from './withForwardRef';

interface TestInputProps {}
class TestInputComponent extends React.Component<
  TestInputProps & WithForwardRefProps<HTMLInputElement>
> {
  render() {
    const { innerRef } = this.props;
    return (
      <div>
        <input type="text" ref={innerRef} />
      </div>
    );
  }
}

const TestInput = withForwardRef<HTMLInputElement, TestInputProps>(
  TestInputComponent,
);

describe('withForwardRef', () => {
  it('forwards refs for TextArea component', () => {
    const $input = React.createRef<HTMLInputElement>();
    mount(<TestInput ref={$input} />);

    expect($input.current).toBeDefined();
    expect($input.current).toBeInstanceOf(HTMLInputElement);
  });
});
