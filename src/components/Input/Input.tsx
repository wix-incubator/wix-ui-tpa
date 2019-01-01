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

const InputWithErrorStates = withStylable<CoreInputProps, ErrorProps>(
  CoreInput,
  style,
  ({error}) => ({error})
);

export const Input: React.SFC<InputProps> = (props: InputProps) => {
  const {errorMessage, error, ...coreInputProps} = props;
  const {disabled} = props;

  return (
    <ErrorMessageWrapper
      error={error}
      errorMessage={errorMessage}
      disabled={disabled}
      render={(errorProps) => <InputWithErrorStates error={errorProps.error} {...coreInputProps}/>}
    />
  );
};
