import * as React from 'react';
import {
  Input as CoreInput,
  InputProps as CoreInputProps,
} from 'wix-ui-core/input';
import { st, classes } from './TextField.st.css';
import { ErrorProps } from '../ErrorMessageWrapper';
import { ReactComponent as ErrorIcon } from '../../assets/icons/Error.svg';
import { ReactComponent as SuccessIcon } from '../../assets/icons/CheckSuccess.svg';
import { ClearIcon } from './ClearIcon';
import { IconButton, Skins } from '../IconButton';
import { Tooltip } from '../Tooltip';
import { TooltipSkin } from '../Tooltip/TooltipEnums';
import { TextFieldTheme } from './TextFieldEnums';
import {
  EMPTY,
  ERROR,
  ERROR_MESSAGE,
  SUCCESS,
  THEME,
  DATA_HOOKS,
} from './dataKeys';
import { TPAComponentProps } from '../../types';
import { Placement } from 'wix-ui-core/popover';

export interface TPATextFieldProps extends TPAComponentProps {
  /** the error message to display */
  errorMessage?: string;
  /** error tooltip max width */
  errorTooltipMaxWidth?: number;
  /** Placement for Popover. Optional. */
  errorTooltipPlacement?: Placement;
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
  errorTooltipPlacement: Placement;
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
    errorTooltipPlacement: 'top-end',
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
      disabled,
      errorTooltipMaxWidth,
      errorTooltipPlacement,
    } = this.props;

    const shouldShowCustomSuffix = !!suffix;
    const shouldShowErrorIcon = error && errorMessage;
    const shouldShowSuccessIcon = successIcon && success;
    const shouldShowClearButton = withClearButton && value && !disabled;

    const shouldAddClearButtonGap =
      shouldShowCustomSuffix || shouldShowErrorIcon || shouldShowSuccessIcon;

    const hasSuffix =
      shouldShowCustomSuffix ||
      shouldShowErrorIcon ||
      shouldShowSuccessIcon ||
      shouldShowClearButton;

    return hasSuffix ? (
      <div className={classes.suffixWrapper}>
        <div className={classes.gap} />
        {shouldShowClearButton && (
          <div className={classes.clearButtonWrapper}>
            <IconButton
              className={classes.clearButton}
              data-hook={DATA_HOOKS.CLEAR_BUTTON}
              aria-label={clearButtonAriaLabel}
              aria-labelledby={clearButtonAriaLabelledby}
              skin={Skins.Line}
              onClick={onClear ? () => this.props.onClear() : undefined}
              icon={<ClearIcon />}
            />
            {shouldAddClearButtonGap && (
              <div className={classes.clearButtonGap} />
            )}
          </div>
        )}
        <StatusIcon
          error={error}
          errorMessage={errorMessage}
          success={success}
          successIcon={successIcon}
          errorTooltipMaxWidth={errorTooltipMaxWidth}
          errorTooltipPlacement={errorTooltipPlacement}
        />
        {suffix && (
          <div
            className={classes.customSuffix}
            data-hook={DATA_HOOKS.CUSTOM_SUFFIX}
          >
            {suffix}
          </div>
        )}
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
      withClearButton,
      onClear,
      clearButtonAriaLabel,
      clearButtonAriaLabelledby,
      errorTooltipPlacement,
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

const ErrorSuffix = ({
  errorMessage,
  tooltipMaxWidth,
  errorTooltipPlacement,
}) => (
  <Tooltip
    appendTo="scrollParent"
    placement={errorTooltipPlacement}
    skin={TooltipSkin.Error}
    content={errorMessage}
    moveBy={{ x: 5, y: 0 }}
    maxWidth={tooltipMaxWidth}
  >
    <ErrorIcon />
  </Tooltip>
);

const StatusIcon = ({
  error,
  errorMessage,
  success,
  successIcon,
  errorTooltipMaxWidth,
  errorTooltipPlacement,
}) => {
  let statusIcon = null;

  if (errorMessage && error) {
    statusIcon = (
      <ErrorSuffix
        errorMessage={errorMessage}
        tooltipMaxWidth={errorTooltipMaxWidth}
        errorTooltipPlacement={errorTooltipPlacement}
      />
    );
  } else if (successIcon && success) {
    statusIcon = <SuccessIcon data-hook={DATA_HOOKS.SUCCESS_ICON} />;
  }

  return statusIcon;
};
