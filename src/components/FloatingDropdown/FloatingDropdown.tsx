import * as React from 'react';

import { Dropdown as CoreDropdown } from 'wix-ui-core/dropdown';

import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import styles from './FloatingDropdown.st.css';
import { DropdownOption } from '../Dropdown/DropdownOption';
import { DropdownBase } from './DropdownBase';
import { DATA_HOOKS } from './constants';
import { FloatingDropdownOptionProps } from './FloatingDropdownOption';

export interface FloatingDropdownProps {
  'aria-labelledby'?: string;
  disabled?: boolean;
  label?: string;
  onChange?(selectedOption: FloatingDropdownOptionProps): void;
  options?: FloatingDropdownOptionProps[];
  placeholder?: string;
  value?: any;
}

type DefaultProps = Required<Pick<FloatingDropdownProps, 'disabled'>>;

interface State {
  selectedOption: FloatingDropdownOptionProps;
}

/** Dropdown component for sort. */
export class FloatingDropdown extends React.Component<
  FloatingDropdownProps,
  State
> {
  static displayName = 'FloatingDropdown';
  static defaultProps: DefaultProps = { disabled: false };

  state = { selectedOption: null, options: [] };

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
      placeholder,
      disabled,
      options,
      ['aria-labelledby']: ariaLabelledBy,
      ...rest
    } = this.props;
    const { selectedOption } = this.state;

    console.log(this.props);

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
                mobile,
              },
              rest,
            )}
            data-mobile={mobile}
          >
            {' '}
            <CoreDropdown
              className={styles.dropdown}
              data-hook={DATA_HOOKS.coreDropdown}
              data-mobile={mobile}
              openTrigger={disabled ? 'none' : 'click'}
              options={coreOptions}
              onDeselect={this.onSelect}
              onSelect={this.onSelect}
              initialSelectedIds={selectedOption ? [selectedOption.id] : []}
            >
              <DropdownBase
                error={false}
                aria-labelledby={ariaLabelledBy}
                className={styles.dropdownBase}
                selectedOption={selectedOption}
                placeholder={placeholder}
                disabled={disabled}
              />
            </CoreDropdown>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
