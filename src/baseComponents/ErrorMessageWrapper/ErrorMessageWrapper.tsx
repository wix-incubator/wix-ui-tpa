import * as React from 'react';
import style from './ErrorMessageWrapper.st.css';

export type ErrorProps = {error: boolean, empty: boolean};

export type ErrorMessageWrapperProps = {
  render: (props: ErrorProps) => any;
  error: boolean;
  disabled: boolean;
  errorMessage: string;
  inputValue: string;
};

export const ErrorMessageWrapper: React.SFC<ErrorMessageWrapperProps> = (props) => {
  const {render, error, disabled, errorMessage, inputValue} = props;

  const empty = !inputValue;
  const inErrorState = error && !disabled && !!errorMessage;

  return (
    <div {...style('root', {empty}, props)}>
      {render({error: inErrorState, empty})}
      {inErrorState && <div className={style.errorMessage}>{errorMessage}</div>}
    </div>
  );
};
