import * as React from 'react';
import {Input as CoreInput, InputProps as CoreInputProps} from 'wix-ui-core/Input';
import style from './Input.st.css';
import {ErrorMessageWrapper, ErrorProps} from '../../baseComponents/ErrorMessageWrapper';

export interface TPAInputProps {
  /** the error message to display */
  errorMessage?: string;
  /** apply error state*/
  error?: boolean;
}
export type InputProps = ErrorProps & TPAInputProps & CoreInputProps;

const InputWithErrorFactory = InputClass => (props: InputProps) => {
  const {errorMessage, error, ...coreInputProps} = props;
  const {disabled} = props;

  return (
    <ErrorMessageWrapper
      error={error}
      errorMessage={errorMessage}
      disabled={disabled}
      render={(errorProps) => <InputClass {...style('root', {error})} error={errorProps.error} {...coreInputProps}/>}
    />
  );
};

export const Input: React.SFC<InputProps> = InputWithErrorFactory(CoreInput);
