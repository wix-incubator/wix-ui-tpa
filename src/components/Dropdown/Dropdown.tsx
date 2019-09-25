import * as React from 'react';
import {
  Dropdown as CoreDropdown,
  DropdownProps as CoreDropdownProps,
} from 'wix-ui-core/dropdown';
import { DropdownOptionType as CoreDropdownOption } from 'wix-ui-core/dropdown-option';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { Text, TYPOGRAPHY } from '../Text';
import { DropdownInput } from './DropdownInput';
import { DropdownError } from './DropdownError';
import { DropdownOption } from './DropdownOption';

import styles from './Dropdown.st.css';

export enum DROPDOWN_ALIGNMENT {
  center = 'center',
}

export interface DropdownProps {
  options: CoreDropdownProps['options'];
  initialSelectedId?: any;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  alignment: DROPDOWN_ALIGNMENT;
}

interface DefaultProps {
  placeholder: string;
  options: CoreDropdownOption[];
}

interface State {
  selectedOption: any;
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
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedOption:
        this.props.options.find(
          option => option.id === this.props.initialSelectedId,
        ) || null,
    };
  }

  onSelect = (option: CoreDropdownOption) => {
    this.setState({ selectedOption: option });
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
              },
              rest,
            )}
          >
            {label && (
              <Text
                {...styles('label', {}, rest)}
                typography={TYPOGRAPHY.runningText}
              >
                {label}
              </Text>
            )}
            <CoreDropdown
              {...styles('dropdown', { mobile, disabled }, rest)}
              data-mobile={mobile}
              openTrigger={disabled ? 'none' : 'click'}
              options={coreOptions}
              onDeselect={this.onSelect}
              onSelect={this.onSelect}
              initialSelectedIds={selectedOption ? [selectedOption.id] : []}
            >
              <DropdownInput
                {...styles('dropdownInput', {}, rest)}
                value={selectedOption ? selectedOption.value : ''}
                placeholder={placeholder}
                disabled={disabled}
                error={error}
              />
              {error && errorMessage && (
                <DropdownError
                  {...styles('dropdownError', {}, rest)}
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
