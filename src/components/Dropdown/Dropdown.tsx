import * as React from 'react';
import { Dropdown as CoreDropdown } from 'wix-ui-core/dropdown';
import {
  TPAComponentsConsumer,
  TPAComponentsContext,
} from '../TPAComponentsConfig';
import { Text, TYPOGRAPHY } from '../Text';

import { DropdownBase } from './DropdownBase';
import { DropdownError } from './DropdownError';
import { DropdownOption, DropdownOptionProps } from './DropdownOption';

import styles from './Dropdown.st.css';
import { DATA_HOOKS } from './constants';
import { Placement } from 'wix-ui-core/popover';

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
  /* use for visual test */
  forceContentElementVisibility?: boolean;
  shouldRenderNativeSelectOnMobile?: boolean;
}

interface DefaultProps {
  placeholder: string;
  options: DropdownOptionProps[];
  placement: Placement;
  shouldRenderNativeOnMobile: boolean;
}

interface State {
  selectedOption: DropdownOptionProps | React.FormEvent<HTMLSelectElement>;
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
    shouldRenderNativeOnMobile: false,
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

  private isNativeSelect() {
    const { mobile: isMobile } = this.context;
    return this.props.shouldRenderNativeSelectOnMobile && isMobile;
  }

  private getOptionData(
    selectedOption: DropdownOptionProps | React.FormEvent<HTMLSelectElement>,
  ) {
    if (this.isNativeSelect()) {
      const index = (selectedOption as React.FormEvent<HTMLSelectElement>)
        .currentTarget.value;
      return this.props.options[index];
    }
    return selectedOption;
  }

  private readonly onSelect = (
    selectedOption: DropdownOptionProps | React.FormEvent<HTMLSelectElement>,
  ) => {
    if (!selectedOption) {
      return;
    }

    const { onChange, options } = this.props;
    const selectedOptionData = this.getOptionData(selectedOption);
    this.setState({ selectedOption: selectedOptionData });
    if (onChange) {
      onChange(options.find(({ id }) => selectedOptionData.id === id));
    }
  };

  private readonly renderNativeSelect = () => {
    const {
      options,
      placeholder,
      ['aria-label']: ariaLabel,
      ['aria-labelledby']: ariaLabelledBy,
    } = this.props;
    return (
      <select
        data-hook="native-select"
        className={styles.dropdownBase}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
      >
        <option value="-1" disabled>
          {placeholder}
        </option>
        {options.map((option, i) => (
          <option key={i} value={i} disabled={option.isSelectable}>
            {option.value}
          </option>
        ))}
      </select>
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

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
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
              <Text
                className={styles.label}
                typography={TYPOGRAPHY.runningText}
              >
                {label}
              </Text>
            )}
            {this.isNativeSelect()
              ? this.renderNativeSelect()
              : this.renderCoreDropdown()}
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
