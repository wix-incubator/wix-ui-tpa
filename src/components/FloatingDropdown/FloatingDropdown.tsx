import * as React from 'react';

import { Dropdown as CoreDropdown } from 'wix-ui-core/dropdown';

import { DropdownOption } from '../Dropdown/DropdownOption';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import styles from './FloatingDropdown.st.css';
import { FloatingDropdownBase } from './FloatingDropdownBase';
import { DATA_HOOKS } from './constants';
import { FloatingDropdownOptionProps } from './FloatingDropdownOption';

export interface FloatingDropdownProps {
  /** Defines a string value that labels the current element. Optional. */
  'aria-label'?: string;
  /** Identifies the element (or elements) that labels the current element. Optional. */
  'aria-labelledby'?: string;
  /** Applies disabled styles. Optional. Boolean. */
  disabled?: boolean;
  /** Label string value. Required. */
  label: string;
  /** Callback which is being called when value changes. Function. Optional. */
  onChange?(selectedOption: FloatingDropdownOptionProps): void;
  /** An array of dropdown option items. Option item structure: { id: string; value: string; isSelectable: boolean; } */
  options: FloatingDropdownOptionProps[];
  /** A placeholder which is being displayed when no value is selected. String. Optional. */
  placeholder?: string;
  /** An id of initially selected item. String. Optional. */
  value?: string;
  /** Force dropdown open. Use for visual test. Optional. Boolean. */
  forceContentElementVisibility?: boolean;
}

type DefaultProps = Required<
  Pick<FloatingDropdownProps, 'disabled' | 'options'>
>;

/** Dropdown component for sort. */
export class FloatingDropdown extends React.Component<FloatingDropdownProps> {
  static displayName = 'FloatingDropdown';
  static defaultProps: DefaultProps = { disabled: false, options: [] };

  onSelect = (selectedOption: FloatingDropdownOptionProps) => {
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
    const { options, value } = this.props;
    const coreOptions = [];
    let selectedOption = null;

    for (const option of options) {
      coreOptions.push({
        ...option,
        render: () => <DropdownOption {...option} />,
      });

      if (option && value === option.id) {
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
      ['aria-label']: ariaLabel,
      ['aria-labelledby']: ariaLabelledBy,
      disabled,
      forceContentElementVisibility,
      label,
      options,
      placeholder,
      value,
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
                mobile,
              },
              rest,
            )}
            data-mobile={mobile}
          >
            <CoreDropdown
              className={styles.dropdown}
              data-hook={DATA_HOOKS.coreDropdown}
              data-mobile={mobile}
              forceContentElementVisibility={forceContentElementVisibility}
              initialSelectedIds={value ? [value] : []}
              onDeselect={this.onSelect}
              onSelect={this.onSelect}
              openTrigger={disabled ? 'none' : 'click'}
              options={coreOptions}
            >
              <FloatingDropdownBase
                aria-label={ariaLabel}
                aria-labelledby={ariaLabelledBy}
                className={styles.floatingDropdownBase}
                disabled={disabled}
                label={label}
                placeholder={placeholder}
                value={selectedOption?.value}
              />
            </CoreDropdown>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
