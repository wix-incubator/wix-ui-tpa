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
  'aria-label'?: string;
  'aria-labelledby'?: string;
  /* use for visual test */
  forceContentElementVisibility?: boolean;
}

interface DefaultProps {
  placeholder: string;
  options: DropdownOptionProps[];
  placement: Placement;
}

/**
 * A dropdown allows a user to select a value from a series of options.
 * Single selection dropdown.
 * */
export class Dropdown extends React.Component<DropdownProps> {
  static displayName = 'Dropdown';
  static defaultProps: DefaultProps = {
    placeholder: '',
    options: [],
    placement: 'bottom',
  };

  onSelect = (selectedOption: DropdownOptionProps) => {
    if (!selectedOption) {
      return;
    }

    if (this.props.onChange) {
      this.props.onChange(
        this.props.options.find(({ id }) => selectedOption.id === id),
      );
    }
  };

  _generateCoreOptions() {
    const { options, initialSelectedId } = this.props;
    const coreOptions = [];
    let selectedOption = null;

    for (const option of options) {
      coreOptions.push({
        ...option,
        render: () => <DropdownOption {...option} />,
      });

      if (option && initialSelectedId === option.id) {
        selectedOption = option;
      }
    }

    return {
      coreOptions,
      selectedOption,
    };
  }

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
      initialSelectedId,
      ['aria-label']: ariaLabel,
      ['aria-labelledby']: ariaLabelledBy,
      ...rest
    } = this.props;
    const { selectedOption, coreOptions } = this._generateCoreOptions();

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
              initialSelectedIds={initialSelectedId ? [initialSelectedId] : []}
              forceContentElementVisibility={forceContentElementVisibility}
            >
              <DropdownBase
                aria-label={ariaLabel}
                aria-labelledby={ariaLabelledBy}
                className={styles.dropdownBase}
                value={selectedOption && selectedOption.value}
                icon={selectedOption && selectedOption.icon}
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
