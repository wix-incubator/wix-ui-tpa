import * as React from 'react';
import {
  Input as CoreInput,
  InputProps as CoreInputProps,
} from 'wix-ui-core/input';
import { st, classes } from './Input.st.css';
import { ErrorMessageWrapper, ErrorProps } from '../ErrorMessageWrapper';
import { TPAComponentProps } from '../../types';

export interface TPAInputProps extends TPAComponentProps {
  /** the error message to display */
  errorMessage?: string;
  /** apply error state*/
  error?: boolean;
}
export type InputProps = ErrorProps & TPAInputProps & CoreInputProps;

export const Input: React.FunctionComponent<InputProps> = (
  props: InputProps,
) => {
  const { errorMessage, error, className, ...coreInputProps } = props;
  const { disabled } = props;

  return (
    <ErrorMessageWrapper
      error={error}
      errorMessage={errorMessage}
      disabled={disabled}
      render={(errorProps) => (
        <CoreInput
          className={st(classes.root, { error }, className)}
          error={errorProps.error}
          {...coreInputProps}
        />
      )}
    />
  );
};
