import * as React from 'react';
import { DATA_ATTRIBUTES, DATA_HOOKS, ICON_SIZE } from './constants';
import { ReactComponent as ArrowIcon } from '../../assets/icons/CaretDown.svg';
import classNames from 'classnames';
import { DropdownOptionProps } from './DropdownOption';
import { TPAComponentsContext } from '../TPAComponentsConfig';
import { TPAComponentProps } from '../../types';
import { TooltipSkin } from '../Tooltip/TooltipEnums';
import { ReactComponent as ErrorIcon } from '../../assets/icons/Error.svg';
import { Tooltip } from '../Tooltip';
import { st as buttonSt } from '../Button/Button.st.css';
import { st, classes } from './DropdownNativeSelect.st.css';

interface DropdownNativeSelectProps extends TPAComponentProps {
  onSelect(selectedOption: DropdownOptionProps): void;
  selectedOption: DropdownOptionProps;
  options: DropdownOptionProps[];
  placeholder: string;
  disabled: boolean;
  error?: boolean;
  errorMessage?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  name?: string;
}

export class DropdownNativeSelect extends React.Component<DropdownNativeSelectProps> {
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
        {options.map((option, i) =>
          !option.divider ? (
            <option key={i} value={option.id} disabled={!option.isSelectable}>
              {option.value}
            </option>
          ) : null,
        )}
      </>
    );
  }

  private renderErrorIcon() {
    return (
      <div className={classes.errorIconWrapper}>
        <Tooltip
          className={classes.errorIcon}
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
      <div className={classes.optionIcon}>{this.props.selectedOption.icon}</div>
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
      className,
      name,
    } = this.props;
    const { rtl } = this.context;

    const hasPlaceholder = !selectedOption || !selectedOption.value;
    const shouldRenderIcon = selectedOption && !!selectedOption.icon;

    const buttonStyle = buttonSt(classes.root, {
      fullWidth: true,
    });

    const nativeSelectStyles = st(
      classes.root,
      {
        error,
        disabled,
        placeholder: hasPlaceholder,
        icon: shouldRenderIcon,
        rtl,
      },
      className,
    );

    return (
      <div className={classes.wrapper}>
        <select
          {...this.getDataAttributes()}
          defaultValue={''}
          {...(selectedOption && { value: selectedOption.id })}
          onChange={(e) => this.onSelect(e)}
          data-hook={DATA_HOOKS.nativeSelect}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          disabled={disabled}
          name={name}
          className={classNames(nativeSelectStyles, buttonStyle)}
        >
          {this.renderOptions(hasPlaceholder)}
        </select>
        {shouldRenderIcon ? this.renderOptionIcon() : null}
        {error && errorMessage && this.renderErrorIcon()}
        <ArrowIcon
          className={classes.arrowIcon}
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
      </div>
    );
  }
}
