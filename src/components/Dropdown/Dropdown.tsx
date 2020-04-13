import * as React from 'react';
import { Dropdown as CoreDropdown } from 'wix-ui-core/dropdown';
import { TPAComponentsContext } from '../TPAComponentsConfig';
import { Text, TYPOGRAPHY } from '../Text';

import { DropdownBase } from './DropdownBase';
import { DropdownError } from './DropdownError';
import { DropdownOption, DropdownOptionProps } from './DropdownOption';

import styles from './Dropdown.st.css';
import { DATA_HOOKS } from './constants';
import { Placement } from 'wix-ui-core/popover';
import { DropdownNativeSelect } from './DropdownNativeSelect';

export enum DROPDOWN_ALIGNMENT {
  center = 'center',
}

export interface DropdownProps {
  options: DropdownOptionProps[];
  onChange?(selectedOption: DropdownOptionProps): void;
  initialSelectedId?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  alignment?: DROPDOWN_ALIGNMENT;
  placement?: Placement;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  shouldRenderNativeSelectOnMobile?: boolean;
  /* use for visual test */
  forceContentElementVisibility?: boolean;
}

interface DefaultProps {
  placeholder: string;
  options: DropdownOptionProps[];
  placement: Placement;
  shouldRenderNativeSelectOnMobile: boolean;
}

interface State {
  selectedOption: DropdownOptionProps;
}

/**
 * A dropdown allows a user to select a value from a series of options.
 * Single selection dropdown.
 * */
export class Dropdown extends React.Component<DropdownProps, State> {
  static displayName = 'Dropdown';
  static contextType = TPAComponentsContext;
  static defaultProps: DefaultProps = {
    placeholder: '',
    options: [],
    placement: 'bottom',
    shouldRenderNativeSelectOnMobile: false,
  };

  static getDerivedStateFromProps(nextProps, state) {
    if (state.selectedOption) {
      return null;
    }
    return {
      selectedOption:
        nextProps.options.find(
          option => option.id === nextProps.initialSelectedId,
        ) || null,
    };
  }

  state = {
    selectedOption: null,
  };

  private shouldRenderNativeSelect() {
    const { mobile: isMobile } = this.context;
    return this.props.shouldRenderNativeSelectOnMobile && isMobile;
  }

  private readonly onSelect = (selectedOption: DropdownOptionProps) => {
    if (!selectedOption) {
      return;
    }

    const { onChange } = this.props;
    this.setState({ selectedOption });
    onChange &&
      onChange(this.props.options.find(({ id }) => selectedOption.id === id));
  };

  private readonly renderNativeSelect = () => {
    const {
      options,
      placeholder,
      disabled,
      error,
      errorMessage,
      ['aria-label']: ariaLabel,
      ['aria-labelledby']: ariaLabelledBy,
    } = this.props;

    return (
      <DropdownNativeSelect
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        disabled={disabled}
        className={styles.dropdownNativeSelect}
        error={error}
        errorMessage={errorMessage}
        options={options}
        onSelect={selectedOption => this.onSelect(selectedOption)}
        placeholder={placeholder}
        selectedOption={this.state.selectedOption}
      />
    );
  };

  private readonly renderCoreDropdown = () => {
    const {
      placeholder,
      disabled,
      error,
      errorMessage,
      options,
      forceContentElementVisibility,
      placement,
      ['aria-label']: ariaLabel,
      ['aria-labelledby']: ariaLabelledBy,
    } = this.props;

    const { mobile: isMobile } = this.context;
    const { selectedOption } = this.state;

    const coreOptions = options.map(option => ({
      ...option,
      render: () => <DropdownOption {...option} />,
    }));

    return (
      <CoreDropdown
        className={styles.dropdown}
        placement={placement}
        data-hook={DATA_HOOKS.coreDropdown}
        data-mobile={isMobile}
        openTrigger={disabled ? 'none' : 'click'}
        options={coreOptions}
        onDeselect={this.onSelect}
        onSelect={this.onSelect}
        initialSelectedIds={selectedOption ? [selectedOption.id] : []}
        forceContentElementVisibility={forceContentElementVisibility}
      >
        <DropdownBase
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          className={styles.dropdownBase}
          selectedOption={selectedOption}
          placeholder={placeholder}
          disabled={disabled}
          error={error}
        />
        {error && errorMessage && (
          <DropdownError
            className={styles.dropdownError}
            errorMessage={errorMessage}
          />
        )}
      </CoreDropdown>
    );
  };

  render() {
    const {
      placeholder,
      disabled,
      error,
      errorMessage,
      label,
      options,
      alignment,
      forceContentElementVisibility,
      placement,
      ['aria-label']: ariaLabel,
      ['aria-labelledby']: ariaLabelledBy,
      ...rest
    } = this.props;

    const { mobile } = this.context;

    return (
      <div
        {...styles(
          'root',
          {
            alignment,
            mobile,
          },
          rest,
        )}
        data-mobile={mobile}
      >
        {label && (
          <Text className={styles.label} typography={TYPOGRAPHY.runningText}>
            {label}
          </Text>
        )}
        {this.shouldRenderNativeSelect()
          ? this.renderNativeSelect()
          : this.renderCoreDropdown()}
      </div>
    );
  }
}
