import * as React from 'react';
import style from './ErrorMessageWrapper.st.css';

export interface ErrorProps {
  error?: boolean;
}

export interface ErrorMessageWrapperProps {
  render(props: ErrorProps): any;
  error: boolean;
  disabled: boolean;
  errorMessage: string;
}

export const ErrorMessageWrapper: React.FunctionComponent<ErrorMessageWrapperProps> = props => {
  const { render, error, disabled, errorMessage } = props;

  const inErrorState = error && !disabled && !!errorMessage;

  return (
    <div {...style('root', {}, props)}>
      {render({ error: inErrorState })}
      {inErrorState && <div className={style.errorMessage}>{errorMessage}</div>}
    </div>
  );
};
