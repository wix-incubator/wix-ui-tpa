import {Input, InputProps as CoreProps} from 'wix-ui-core/Input';
import inputStyles from './Input.st.css';
import {withStylable} from 'wix-ui-core/dist/src';

export interface TPAInputProps extends CoreProps {
  valid?: boolean;
}

const defaultProps = {
  valid: true
};

export const TpaInput = withStylable<CoreProps, TPAInputProps>(Input, inputStyles, ({valid}) => ({
  valid,
  invalid: !valid
}), defaultProps);
