import * as React from 'react';
import {Input as CoreInput, InputProps as CoreInputProps} from 'wix-ui-core/Input';
import style from './Input.st.css';
import {withStylable} from 'wix-ui-core/withStylable';
import {ErrorMessageWrapper} from '../../baseComponents/ErrorMessageWrapper';
import {ErrorProps} from '../../baseComponents/ErrorMessageWrapper/ErrorMessageWrapper';

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
  ({error, empty}) => ({error, empty})
);

export const Input: React.SFC<InputProps> = (props: InputProps) => {
  const {errorMessage, error, ...coreInputProps} = props;
  const {value, disabled} = props;

  return (
    <ErrorMessageWrapper
      error={error}
      errorMessage={errorMessage}
      inputValue={value}
      disabled={disabled}
      render={(errorProps) => <InputWithErrorStates error={errorProps.error} empty={errorProps.empty} {...coreInputProps}/>}
    />
  );
};
