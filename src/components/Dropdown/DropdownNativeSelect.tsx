import * as React from 'react';
import styles from './DropdownNativeSelect.st.css';
import dropdownStyles from './Dropdown.st.css';
import buttonStyles from '../Button/Button.st.css';
import { DATA_ATTRIBUTES, DATA_HOOKS, ICON_SIZE } from './constants';
import { ReactComponent as ArrowIcon } from '../../assets/icons/CaretDown.svg';
import { PRIORITY, SIZE } from '../Button';
import classNames from 'classnames';
import { DropdownOptionProps } from './DropdownOption';
import { TPAComponentsContext } from '../TPAComponentsConfig';
import { TPAComponentProps } from '../../types';
import { TooltipSkin } from '../Tooltip/TooltipEnums';
import { ReactComponent as ErrorIcon } from '../../assets/icons/Error.svg';
import { Tooltip } from '../Tooltip';

interface DropdownNativeSelectProps {
  onSelect(selectedOption: DropdownOptionProps): void;
  selectedOption: DropdownOptionProps;
  options: DropdownOptionProps[];
  placeholder: string;
  disabled: boolean;
  error?: boolean;
  errorMessage?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

export class DropdownNativeSelect extends React.Component<
  DropdownNativeSelectProps & TPAComponentProps
> {
  static contextType = TPAComponentsContext;

  private onSelect(e) {
    const { selectedOption: prevSelectedOption } = this.props;
    const optionId = e.target.value;
    if ((prevSelectedOption && prevSelectedOption.id) === optionId) {
      return;
    }
    const selectedOption = this.props.options.find(({ id }) => id === optionId);
    this.props.onSelect(selectedOption);
  }

  private renderOptions(hasPlaceholder: boolean) {
    const { placeholder, options } = this.props;
    return (
      <>
        {hasPlaceholder && (
          <option data-hook={DATA_HOOKS.placeholderOption} value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, i) => (
          <option key={i} value={option.id} disabled={!option.isSelectable}>
            {option.value}
          </option>
        ))}
      </>
    );
  }

  private renderErrorIcon() {
    return (
      <div className={styles.errorIconWrapper}>
        <Tooltip
          className={styles.errorIcon}
          data-hook={DATA_HOOKS.errorTooltip}
          placement="top-end"
          skin={TooltipSkin.Error}
          content={this.props.errorMessage}
          appendTo={'scrollParent'}
        >
          <ErrorIcon width={ICON_SIZE} height={ICON_SIZE} />
        </Tooltip>
      </div>
    );
  }

  private renderOptionIcon() {
    return (
      <div className={styles.optionIcon}>{this.props.selectedOption.icon}</div>
    );
  }

  private getDataAttributes() {
    const { error } = this.props;
    return {
      [DATA_ATTRIBUTES.error]: error,
    };
  }

  render() {
    const {
      disabled,
      selectedOption,
      error,
      errorMessage,
      ['aria-label']: ariaLabel,
      ['aria-labelledby']: ariaLabelledBy,
    } = this.props;
    const { rtl } = this.context;

    const hasPlaceholder = !selectedOption || !selectedOption.value;
    const shouldRenderIcon = selectedOption && !!selectedOption.icon;

    const buttonStyle = buttonStyles(
      'root',
      {
        priority: PRIORITY.basic,
        size: SIZE.medium,
        fullWidth: true,
        mobile: true,
      },
      {},
    );

    const componentStyles = styles(
      'root',
      {
        error,
        disabled,
        placeholder: hasPlaceholder,
        icon: shouldRenderIcon,
        rtl,
      },
      {},
    );

    return (
      <div className={styles.wrapper}>
        <select
          {...componentStyles}
          {...buttonStyle}
          {...this.getDataAttributes()}
          defaultValue={''}
          {...(selectedOption && { value: selectedOption.id })}
          onChange={e => this.onSelect(e)}
          data-hook={DATA_HOOKS.nativeSelect}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          disabled={disabled}
          className={classNames(
            styles.root,
            buttonStyles.root,
            dropdownStyles.dropdownNativeSelect,
          )}
        >
          {this.renderOptions(hasPlaceholder)}
        </select>
        {shouldRenderIcon ? this.renderOptionIcon() : null}
        {error && errorMessage && this.renderErrorIcon()}
        <ArrowIcon
          className={styles.arrowIcon}
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
      </div>
    );
  }
}
