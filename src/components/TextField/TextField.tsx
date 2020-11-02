import * as React from 'react';
import {
  Input as CoreInput,
  InputProps as CoreInputProps,
} from 'wix-ui-core/input';
import { st, classes } from './TextField.st.css';
import { ErrorProps } from '../ErrorMessageWrapper';
import { ReactComponent as ErrorIcon } from '../../assets/icons/Error.svg';
import { ReactComponent as SuccessIcon } from '../../assets/icons/CheckSuccess.svg';
import { ReactComponent as ClearIcon} from '../../assets/icons/Close.svg';
import { IconButton } from '../IconButton';
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
  /** should display success icon */
  successIcon?: boolean;
  /** apply error state*/
  error?: boolean;
  /** should display clear button */
  withClearButton?: boolean;
  /** callback for when the clear button is clicked */
  onClear?(): void;
  /** Defines a string value that labels the clear button element. Optional. */
  clearButtonAriaLabel?: string;
  /** Identifies the element that labels the clear button element. Optional. */
  clearButtonAriaLabelledby?: string;
}

interface DefaultProps {
  success: boolean;
  successIcon: boolean;
  error: boolean;
  withClearButton: boolean;
  disabled: boolean;
  theme: TextFieldTheme;
}

export type TextFieldProps = ErrorProps & TPATextFieldProps & CoreInputProps;

export class TextField extends React.Component<TextFieldProps> {
  static displayName = 'TextField';
  static defaultProps: DefaultProps = {
    success: false,
    successIcon: false,
    error: false,
    withClearButton: false,
    disabled: false,
    theme: TextFieldTheme.Box,
  };
  public TextFieldRef = React.createRef<CoreInput>();

  public focus = () => {
    this.TextFieldRef.current.focus();
  };

  public blur = () => {
    this.TextFieldRef.current.blur();
  };

  _getSuffix = () => {
    const {
      error,
      errorMessage,
      success,
      successIcon,
      suffix,
      withClearButton,
      clearButtonAriaLabel,
      clearButtonAriaLabelledby,
      onClear,
      value,
    } = this.props;

    const hasSuffix =
      suffix ||
      (error && errorMessage) ||
      (successIcon && success) ||
      withClearButton;

    return hasSuffix ? (
      <div className={classes.suffixWrapper}>
        <div className={classes.gap} />
        {withClearButton && value && (
          <IconButton
            className={classes.clearButton}
            data-hook="clear-button"
            aria-label={clearButtonAriaLabel}
            aria-labelledby={clearButtonAriaLabelledby}
            onClick={() => onClear && this.props.onClear()}
            icon={<ClearIcon />}
          />
        )}
        <StatusIcon
          error={error}
          errorMessage={errorMessage}
          success={success}
          successIcon={successIcon}
        />
        {suffix}
      </div>
    ) : null;
  };

  render() {
    const {
      errorMessage,
      success,
      successIcon,
      error,
      disabled,
      theme,
      suffix,
      className,
      ...restProps
    } = this.props;

    const dataObject = {
      [ERROR_MESSAGE]: errorMessage,
      [THEME]: theme,
      [SUCCESS]: success,
      [ERROR]: error,
      [EMPTY]: !this.props.value,
    };

    return (
      <CoreInput
        {...dataObject}
        className={st(
          classes.root,
          {
            error,
            theme,
            success,
            disabled,
          },
          className,
        )}
        ref={this.TextFieldRef}
        suffix={this._getSuffix()}
        error={error}
        {...restProps}
        disabled={disabled}
      />
    );
  }
}

const ErrorSuffix = ({ className, errorMessage }) => (
  <Tooltip
    className={className}
    appendTo="scrollParent"
    placement="top-end"
    skin={TooltipSkin.Error}
    content={errorMessage}
    moveBy={{ x: 5, y: 0 }}
  >
    <ErrorIcon />
  </Tooltip>
);

const StatusIcon = ({ error, errorMessage, success, successIcon }) => {
  let statusIcon = null;

  if (errorMessage && error) {
    statusIcon = (
      <ErrorSuffix
        className={classes.errorStatusIcon}
        errorMessage={errorMessage}
      />
    );
  } else if (successIcon && success) {
    statusIcon = (
      <SuccessIcon
        data-hook="successIcon"
        className={classes.successStatusIcon}
      />
    );
  }

  return statusIcon;
};
