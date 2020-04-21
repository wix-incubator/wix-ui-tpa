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
}

export class FloatingDropdownBase extends React.Component<
  FloatingDropdownBaseProps
> {
  static _index: number;
  private readonly _id: string;

  constructor(props) {
    super(props);

    this._id =
      props.id || `__floating-dropdown-base-${++FloatingDropdownBase._index}`;
  }
  _getContentWrapper(content, isLabel?: boolean) {
    const { label } = this.props;
    const TagName = isLabel ? 'label' : 'div';

    return (
      <div className={styles.content}>
        <TagName
          className={styles.textContent}
          htmlFor={isLabel ? this._id : undefined}
        >
          <span className={styles.label}>{label}</span>
          {content}
        </TagName>
        <ArrowIcon
          className={styles.arrowIcon}
          height={ICON_SIZE}
          width={ICON_SIZE}
        />
      </div>
    );
  }

  _getButtonContent() {
    const { placeholder, value } = this.props;

    return this._getContentWrapper(
      <div
        className={styles.selectedValue}
        data-hook={DATA_HOOKS.baseSelectedValue}
      >
        {value || placeholder}
      </div>,
    );
  }

  _getNativeDropdown() {
    const {
      value,
      options,
      name,
      placeholder,
      ['aria-labelledby']: ariaLabelledBy,
    } = this.props;

    return this._getContentWrapper(
      <select
        id={this._id}
        value={value}
        name={name}
        className={styles.selectedValue}
        aria-labelledby={ariaLabelledBy}
        data-hook={DATA_HOOKS.baseSelectedValue}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((option: FloatingDropdownOptionProps) => (
          <option
            value={option.id}
            disabled={!option.isSelectable}
            selected={value === option.id}
          >
            {option.value}
          </option>
        ))}
      </select>,
      true,
    );
  }

  _getBaseContent() {
    const {
      ['aria-label']: ariaLabel,
      ['aria-labelledby']: ariaLabelledBy,
      disabled,
      id,
    } = this.props;

    return (
      <TextButton
        aria-haspopup
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy || id}
        data-hook={DATA_HOOKS.base}
        disabled={disabled}
        priority={TEXT_BUTTON_PRIORITY.secondary}
        className={styles.btn}
      >
        {this._getButtonContent()}
      </TextButton>
    );
  }

  render() {
    const { mobile, ...rest } = this.props;

    return (
      <div {...styles('root', { mobile }, rest)}>
        {mobile ? this._getNativeDropdown() : this._getBaseContent()}
      </div>
    );
  }
}
