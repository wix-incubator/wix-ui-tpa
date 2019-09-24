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
}

interface State {
  selectedOption: CoreDropdownOption;
}

const options = new Array(5).fill(null).map((el, i) => {
  const option = {
    id: i,
    value: `Input Text ${i + 1}`,
    isDisabled: i > 2,
    isSelectable: true,
  };
  option.render = () => <DropdownOption {...option} />;
  return option;
});

/**
 * A dropdown allows a user to select a value from a series of options.
 * Single selection dropdown.
 * */
export class Dropdown extends React.Component<DropdownProps, State> {
  static displayName = 'Dropdown';
  static defaultProps: DefaultProps = {
    placeholder: '',
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
      ...rest
    } = this.props;
    const { selectedOption } = this.state;

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
              options={options}
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
