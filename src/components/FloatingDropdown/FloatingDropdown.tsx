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

interface State {
  selectedOption: FloatingDropdownOptionProps;
}

/** Dropdown component for sort. */
export class FloatingDropdown extends React.Component<
  FloatingDropdownProps,
  State
> {
  static displayName = 'FloatingDropdown';
  static defaultProps: DefaultProps = { disabled: false, options: [] };

  static getDerivedStateFromProps(
    nextProps: FloatingDropdownProps,
    state: State,
  ) {
    if (state.selectedOption) {
      return null;
    }
    return {
      selectedOption:
        nextProps.options.find(option => option.id === nextProps.value) || null,
    };
  }

  state = { selectedOption: null };

  onSelect = (selectedOption: FloatingDropdownOptionProps) => {
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
      ['aria-label']: ariaLabel,
      ['aria-labelledby']: ariaLabelledBy,
      disabled,
      forceContentElementVisibility,
      label,
      options,
      placeholder,
      ...rest
    } = this.props;
    const { selectedOption } = this.state;

    const coreOptions = options.map(option => ({
      ...option,
      render: () => <DropdownOption {...option} isSelectable />,
    }));

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
              initialSelectedIds={selectedOption ? [selectedOption.id] : []}
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
                selectedOption={selectedOption}
              />
            </CoreDropdown>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
