import * as React from 'react';
import { st, classes } from './ErrorMessageWrapper.st.css';
import { TPAComponentProps } from '../../types';

export interface ErrorProps {
  error?: boolean;
}

export interface ErrorMessageWrapperProps extends TPAComponentProps {
  render(props: ErrorProps): any;
  error: boolean;
  disabled: boolean;
  errorMessage: string;
}

export const ErrorMessageWrapper: React.FunctionComponent<ErrorMessageWrapperProps> = (
  props,
) => {
  const { render, error, disabled, errorMessage, className } = props;

  const inErrorState = error && !disabled && !!errorMessage;

  return (
    <div className={st(classes.root, className)} data-hook={props['data-hook']}>
      {render({ error: inErrorState })}
      {inErrorState && (
        <div className={classes.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};
