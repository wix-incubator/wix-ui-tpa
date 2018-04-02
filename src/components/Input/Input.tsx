import * as React from 'react';
import {Input as CoreInput, InputProps as CoreInputProps} from 'wix-ui-core/Input';
import style from './Input.st.css';
import {ErrorLine} from '../../baseComponents/ErrorLine';
import {withStylable} from 'wix-ui-core/withStylable';

export interface TPAInputProps {
  /** the error message to display */
  errorMessage?: string;
}

const TPAInput = withStylable<CoreInputProps, TPAInputProps>(
  CoreInput,
  style,
  (props) => ({empty: isEmptyInput(props)})
);

export type InputProps = TPAInputProps & CoreInputProps;

function isEmptyInput(props) {
  return !props.value;
}

export const Input: React.SFC<InputProps> = (props) => {
  const {errorMessage, ...tpaInputProps} = props;
  const empty = isEmptyInput(props);

  const shouldShowErrorMessage = !!props.error && !props.disabled && props.errorMessage;

  return (
    <TPAInput
      {...tpaInputProps}
      suffix={
        <span>
          {tpaInputProps.suffix}
          {shouldShowErrorMessage && <ErrorLine className={style.errorMessage} message={errorMessage} empty={empty}/>}
        </span>
      }
    />
  );
};

Input.displayName = 'Input';
