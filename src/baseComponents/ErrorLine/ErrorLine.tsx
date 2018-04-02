import * as React from 'react';
import style from './ErrorLine.st.css';

export interface ErrorLineProps {
  className?: string;
  message?: string;
  empty?: boolean;
}

export const ErrorLine: React.SFC<ErrorLineProps> = (props) => {
  const {empty, message} = props;
  return (
    <div {...style('root', {empty}, props)}>
      {message}
    </div>
  );
};
