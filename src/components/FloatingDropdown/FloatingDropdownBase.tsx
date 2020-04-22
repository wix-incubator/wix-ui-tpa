import * as React from 'react';
import { ReactComponent as ArrowIcon } from '../../assets/icons/CaretDown.svg';
import { TextButton, TEXT_BUTTON_PRIORITY } from '../TextButton';
import { TPAComponentProps } from '../../types';
import { DATA_HOOKS, ICON_SIZE } from './constants';
import { FloatingDropdownOptionProps } from './FloatingDropdownOption';
import styles from './FloatingDropdownBase.st.css';

interface FloatingDropdownBaseProps extends TPAComponentProps {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  disabled: boolean;
  label: string;
  placeholder: string;
  value: string;
  mobile?: boolean;
  options: FloatingDropdownOptionProps[];
  name?: string;
  id?: string;
  onChange?(selectedOption: FloatingDropdownOptionProps): void;
}

export class FloatingDropdownBase extends React.Component<
  FloatingDropdownBaseProps
> {
  _getSelectedOption = (selectedId: string) => {
    const { options } = this.props;
    return options.find(({ id }) => selectedId === id);
  };

  _onSelect = e => {
    const { onChange } = this.props;
    const selectedId = e.target.value;

    if (onChange) {
      onChange(this._getSelectedOption(selectedId));
    }
  };

  _getContent() {
    const {
      value,
      placeholder,
      label,
      options,
      ['aria-labelledby']: ariaLabelledBy,
      mobile,
      disabled,
    } = this.props;

    const selectedOption = this._getSelectedOption(value);

    return (
      <>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <span className={styles.label}>{label}</span>
            <div
              className={styles.selectedValue}
              data-hook={DATA_HOOKS.baseSelectedValue}
            >
              {selectedOption?.value || placeholder}
            </div>
          </div>
          <ArrowIcon
            className={styles.arrowIcon}
            height={ICON_SIZE}
            width={ICON_SIZE}
          />
        </div>
        {mobile ? (
          <select
            value={value}
            name={name}
            className={styles.select}
            aria-labelledby={ariaLabelledBy}
            data-hook={DATA_HOOKS.nativeSelect}
            onChange={this._onSelect}
            disabled={disabled}
          >
            {placeholder ? (
              <option value="" disabled>
                {placeholder}
              </option>
            ) : null}
            {options.map((option: FloatingDropdownOptionProps) => (
              <option
                value={option.id}
                disabled={!option.isSelectable}
                key={option.id}
              >
                {option.value}
              </option>
            ))}
          </select>
        ) : null}
      </>
    );
  }

  render() {
    const {
      value,
      placeholder,
      label,
      options,
      ['aria-label']: ariaLabel,
      ['aria-labelledby']: ariaLabelledBy,
      mobile,
      id,
      disabled,
      ...rest
    } = this.props;

    let content = this._getContent();

    if (!mobile) {
      content = (
        <TextButton
          aria-haspopup
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy || id}
          disabled={disabled}
          priority={TEXT_BUTTON_PRIORITY.secondary}
          className={styles.btn}
        >
          {content}
        </TextButton>
      );
    }

    return (
      <div
        {...styles('root', { mobile, disabled }, rest)}
        data-hook={DATA_HOOKS.base}
      >
        {content}
      </div>
    );
  }
}
