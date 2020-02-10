import * as React from 'react';
import { Dropdown as CoreDropdown } from 'wix-ui-core/dropdown';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
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
  /* use for visual test */
  forceContentElementVisibility?: boolean;
}

interface DefaultProps {
  placeholder: string;
  options: DropdownOptionProps[];
  placement: Placement;
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
  static defaultProps: DefaultProps = {
    placeholder: '',
    options: [],
    placement: 'bottom',
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

  onSelect = (selectedOption: DropdownOptionProps) => {
    if (!selectedOption) {
      return;
    }
    this.setState({ selectedOption });
    if (this.props.onChange) {
      this.props.onChange(
        this.props.options.find(({ id }) => selectedOption.id === id),
      );
    }
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
      ...rest
    } = this.props;
    const { selectedOption } = this.state;

    const coreOptions = options.map(option => ({
      ...option,
      render: () => <DropdownOption {...option} />,
    }));

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
            <CoreDropdown
              className={styles.dropdown}
              placement={placement}
              data-hook={DATA_HOOKS.coreDropdown}
              data-mobile={mobile}
              openTrigger={disabled ? 'none' : 'click'}
              options={coreOptions}
              onDeselect={this.onSelect}
              onSelect={this.onSelect}
              initialSelectedIds={selectedOption ? [selectedOption.id] : []}
              forceContentElementVisibility={forceContentElementVisibility}
            >
              <DropdownBase
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
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
