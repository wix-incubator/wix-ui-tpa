import * as React from 'react';
import {Input as CoreInput, InputProps as CoreInputProps} from 'wix-ui-core/Input';
import style from './Input.st.css';
import {withStylable} from 'wix-ui-core/withStylable';
import {ErrorMessageWrapper, ErrorProps} from '../../baseComponents/ErrorMessageWrapper';

export interface TPAInputProps {
  /** the error message to display */
  errorMessage?: string;
  /** apply error state*/
  error?: boolean;
}
export type InputProps = TPAInputProps & CoreInputProps;

const StyledInput = withStylable<CoreInputProps, ErrorProps>(
  CoreInput,
  style,
  ({error}) => ({error})
);

const InputWithErrorFactory = InputClass => (props: InputProps) => {
  const {errorMessage, error, ...coreInputProps} = props;
  const {disabled} = props;

  return (
    <ErrorMessageWrapper
      error={error}
      errorMessage={errorMessage}
      disabled={disabled}
      render={(errorProps) => <InputClass error={errorProps.error} {...coreInputProps}/>}
    />
  );
};

export const Input: React.SFC<InputProps> = InputWithErrorFactory(StyledInput);

export const InputBase: React.SFC<InputProps> =  InputWithErrorFactory(CoreInput);
