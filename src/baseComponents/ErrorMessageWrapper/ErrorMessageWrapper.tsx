import * as React from 'react';
import style from './ErrorMessageWrapper.st.css';

export type ErrorProps = {
  error?: boolean
};

export type ErrorMessageWrapperProps = {
  render: (props: ErrorProps) => any;
  error: boolean;
  disabled: boolean;
  errorMessage: string;
};

export const ErrorMessageWrapper: React.SFC<ErrorMessageWrapperProps> = (props) => {
  const {render, error, disabled, errorMessage} = props;

  const inErrorState = error && !disabled && !!errorMessage;

  return (
    <div {...style('root', {}, props)}>
      {render({error: inErrorState})}
      {inErrorState && <div className={style.errorMessage}>{errorMessage}</div>}
    </div>
  );
};
