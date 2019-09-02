import * as React from 'react';
import { mount } from 'enzyme';

import { withForwardRef, WithForwardRefProps } from './withForwardRef';

interface TestInputProps {
  value: string;
  handleChange(value: string): void;
}
class TestInputComponent extends React.Component<
  TestInputProps & WithForwardRefProps<HTMLInputElement>
> {
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    this.props.handleChange(event.target.value);

  render() {
    const { innerRef, value } = this.props;

    return (
      <input
        type="text"
        onChange={this.handleChange}
        value={value}
        ref={innerRef}
      />
    );
  }
}

const TestInput = withForwardRef<HTMLInputElement, TestInputProps>(
  TestInputComponent,
);

describe('withForwardRef', () => {
  const $input = React.createRef<HTMLInputElement>();
  it('forwards refs for TextArea component', () => {
    mount(
      <>
        <TestInput value="Test" handleChange={jest.fn()} ref={$input} />
      </>,
    );

    expect($input.current).toBeDefined();
    expect($input.current).toBeInstanceOf(HTMLInputElement);
    expect($input.current.value).toEqual('Test');
  });
});
