import * as React from 'react';
import {
  Input as CoreInput,
  InputProps as CoreInputProps,
} from 'wix-ui-core/input';
import { st, classes } from './TextField.st.css';
import { ErrorProps } from '../ErrorMessageWrapper';
import { ReactComponent as ErrorIcon } from '../../assets/icons/Error.svg';
import { ReactComponent as SuccessIcon } from '../../assets/icons/CheckSuccess.svg';
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
}
export type TextFieldProps = ErrorProps & TPATextFieldProps & CoreInputProps;

export class TextField extends React.Component<TextFieldProps> {
  public TextFieldRef = React.createRef<CoreInput>();

  public focus = () => {
    this.TextFieldRef.current.focus();
  };

  public blur = () => {
    this.TextFieldRef.current.blur();
  };

  getSuffix = () => {
    const {
      errorMessage,
      success = false,
      successIcon = false,
      error = false,
      suffix,
    } = this.props;
    let suffixToShow = suffix;

    if (errorMessage && error) {
      suffixToShow = (
        <Tooltip
          appendTo="scrollParent"
          placement="top-end"
          skin={TooltipSkin.Error}
          content={errorMessage}
          moveBy={{ x: 5, y: 0 }}
        >
          <ErrorIcon />
        </Tooltip>
      );
    }

    if (successIcon && success) {
      suffixToShow = <SuccessIcon data-hook="successIcon" />;
    }
    return suffixToShow;
  };

  render() {
    const {
      errorMessage,
      success = false,
      successIcon = false,
      error = false,
      disabled = false,
      theme = TextFieldTheme.Box,
      suffix,
      className,
      ...restProps
    } = this.props;

    const suffixToShow = this.getSuffix();
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
        suffix={
          suffixToShow && (
            <div className={classes.suffixWrapper}>
              <div className={classes.gap} />
              {suffixToShow}
            </div>
          )
        }
        error={error}
        {...restProps}
        disabled={disabled}
      />
    );
  }
}
