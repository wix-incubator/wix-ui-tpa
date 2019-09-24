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

import styles from './Dropdown.st.css';
import { DropdownOption } from './DropdownOption';

export interface DropdownProps {
  options: CoreDropdownProps['options'];
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  label?: string;
}

interface DefaultProps {
  placeholder: string;
  options: CoreDropdownProps['options'];
}

interface State {
  selectedOption: CoreDropdownOption;
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

  state = {
    selectedOption: null,
  };

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
          <div {...styles('root', {}, rest)}>
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
