import * as React from 'react';

import { Dropdown as CoreDropdown } from 'wix-ui-core/dropdown';

import { DropdownOption } from '../Dropdown/DropdownOption';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import styles from './FloatingDropdown.st.css';
import { FloatingDropdownBase } from './FloatingDropdownBase';
import { DATA_HOOKS } from './constants';
import { FloatingDropdownOptionProps } from './FloatingDropdownOption';

export interface FloatingDropdownProps {
  'aria-labelledby'?: string;
  disabled?: boolean;
  label: string;
  onChange?(selectedOption: FloatingDropdownOptionProps): void;
  options: FloatingDropdownOptionProps[];
  placeholder?: string;
  value?: string;
  /* use for visual test */
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
