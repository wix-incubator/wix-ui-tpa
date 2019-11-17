import * as React from 'react';
import styles from './TextArea.st.css';
import { TEXT_AREA_DATA_HOOK, TEXT_AREA_ERROR_DATA_HOOK } from './dataHooks';
import { Tooltip } from '../Tooltip';
import { ReactComponent as ErrorIcon } from '../../assets/icons/Error.svg';
import {
  TEXT_AREA_DISABLED,
  TEXT_AREA_ERROR,
  TEXT_AREA_SUCCESS,
  TEXT_AREA_THEME,
} from './dataKeys';
import { TooltipSkin } from '../Tooltip/TooltipEnums';
import { TextAreaTheme } from './TextAreaEnums';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { TPAComponentProps } from '../../types';

export interface TextAreaProps extends TPAComponentProps {
  value: string;
  error?: boolean;
  success?: boolean;
  ariaLabel: string;
  disabled?: boolean;
  placeholder?: string;
  /** Possible values: 'line', 'box' */
  theme?: TextAreaTheme;
  errorDescription?: string;
  onChange(event: React.ChangeEvent<HTMLTextAreaElement>): void;
}

interface DefaultProps {
  error: boolean;
  success: boolean;
  disabled: boolean;
  placeholder: string;
  theme: TextAreaTheme;
  errorDescription: string;
}

/** TextArea component */
export class TextArea extends React.Component<TextAreaProps> {
  static displayName = 'TextArea';
  static defaultProps: DefaultProps = {
    error: false,
    success: false,
    disabled: false,
    placeholder: '',
    errorDescription: '',
    theme: TextAreaTheme.Box,
  };

  _getDataAttributes() {
    const { disabled, success, theme, error } = this.props;

    return {
      [TEXT_AREA_DISABLED]: disabled,
      [TEXT_AREA_THEME]: theme,
      [TEXT_AREA_ERROR]: error,
      [TEXT_AREA_SUCCESS]: success,
    };
  }

  render() {
    const {
      value,
      theme,
      error,
      success,
      disabled,
      onChange,
      placeholder,
      errorDescription,
      ...rest
    } = this.props;
    const dataObject = this._getDataAttributes();
    const showErrorIcon = error && errorDescription;
    return (
      <TPAComponentsConsumer>
        {({ rtl }) => {
          return (
            <div
              {...dataObject}
              {...styles(
                'root',
                {
                  error,
                  rtl,
                  errorDescription: !!errorDescription,
                  theme,
                  success,
                  disabled,
                },
                rest,
              )}
            >
              <textarea
                value={value}
                disabled={disabled}
                onChange={e => {
                  if (!disabled) {
                    onChange(e);
                  }
                }}
                placeholder={placeholder}
                className={styles.textArea}
                data-hook={TEXT_AREA_DATA_HOOK}
                aria-label={this.props.ariaLabel}
              />
              {showErrorIcon && (
                <div
                  data-hook={TEXT_AREA_ERROR_DATA_HOOK}
                  className={styles.errorIconWrapper}
                >
                  <Tooltip
                    placement={'top-end'}
                    appendTo={'scrollParent'}
                    skin={TooltipSkin.Error}
                    content={errorDescription}
                  >
                    <ErrorIcon />
                  </Tooltip>
                </div>
              )}
            </div>
          );
        }}
      </TPAComponentsConsumer>
    );
  }
}
