import * as React from 'react';
import {Input as InputCore, InputProps as CoreProps} from 'wix-ui-core/Input';
import inputStyles from './Input.st.css';
import {withStylable} from 'wix-ui-core/dist/src';

export interface InputProps extends CoreProps {
  valid?: boolean;
}

const defaultProps = {
  valid: true
};

export const Input = withStylable<CoreProps, InputProps>(InputCore, inputStyles, ({valid}) => ({
  valid,
  invalid: !valid
}), defaultProps);
