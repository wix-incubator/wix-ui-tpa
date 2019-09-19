import * as React from 'react';
import {
  Input as CoreInput,
  InputProps as CoreInputProps,
} from 'wix-ui-core/input';
import style from './TextField.st.css';
import { ErrorProps } from '../ErrorMessageWrapper';
import { ReactComponent as ErrorIcon } from '../../assets/icons/Error.svg';
import { Tooltip } from '../Tooltip';
import { TooltipSkin } from '../Tooltip/TooltipEnums';
import { TextFieldTheme } from './TextFieldEnums';
import { EMPTY, ERROR, ERROR_MESSAGE, SUCCESS, THEME } from './dataKeys';
import { TPAComponentProps } from '../../types';

export interface TPATextFieldProps extends TPAComponentProps {
  /** the error message to display */
  errorMessage?: string;
  /** possible values: 'line', 'box' */
  theme?: TextFieldTheme;
  /** apply success state */
  success?: boolean;
  /** apply error state*/
  error?: boolean;
}
export type TextFieldProps = ErrorProps & TPATextFieldProps & CoreInputProps;

export const TextField: React.FunctionComponent<TextFieldProps> = (
  props: TextFieldProps,
) => {
  const {
    errorMessage,
    success = false,
    error = false,
    disabled = false,
    theme = TextFieldTheme.Box,
    suffix,
    ...restProps
  } = props;
  let suffixToShow = suffix;

  if (errorMessage && error) {
    suffixToShow = (
      <Tooltip
        appendTo="scrollParent"
        placement="top-end"
        skin={TooltipSkin.Error}
        content={errorMessage}
      >
        <ErrorIcon />
      </Tooltip>
    );
  }
  const dataObject = {
    [ERROR_MESSAGE]: errorMessage,
    [THEME]: theme,
    [SUCCESS]: success,
    [ERROR]: error,
    [EMPTY]: !props.value,
  };

  return (
    <CoreInput
      {...dataObject}
      {...style(
        'root',
        {
          error,
          theme,
          success,
          disabled,
        },
        restProps,
      )}
      suffix={
        suffixToShow && (
          <div className={style.suffixWrapper}>
            <div className={style.gap} />
            {suffixToShow}
          </div>
        )
      }
      error={error}
      {...restProps}
      disabled={disabled}
    />
  );
};
