import * as React from 'react';

import { Dropdown as CoreDropdown } from 'wix-ui-core/dropdown';

import { DropdownOption } from '../Dropdown/DropdownOption';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

/* TODO
 * The import below is a workaround. FloatingDropdown and Dropdown
 * components should be refactored according to this thread
 * https://github.com/wix/wix-ui-tpa/pull/387 (or merged into a single component)
 */
import '../Dropdown/Dropdown.st.css';
import { st, classes } from './FloatingDropdown.st.css';
import { FloatingDropdownBase } from './FloatingDropdownBase';
import { DATA_HOOKS } from './constants';
import { FloatingDropdownOptionProps } from './FloatingDropdownOption';
import { Placement } from 'wix-ui-core/popover';
import { TPAComponentProps } from '../../types';
import { Option, OptionFactory } from 'wix-ui-core/dropdown-option';

export interface FloatingDropdownProps extends TPAComponentProps {
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
  /** Placement for Popover. Optional. Placement. */
  placement?: Placement;
  name?: string;
  id?: string;
}

type DefaultProps = Required<
  Pick<FloatingDropdownProps, 'disabled' | 'options' | 'placement'>
>;

/** Dropdown component for sort. */
export class FloatingDropdown extends React.Component<FloatingDropdownProps> {
  static displayName = 'FloatingDropdown';
  static defaultProps: DefaultProps = {
    disabled: false,
    options: [],
    placement: 'bottom',
  };

  _onSelect = (selectedOption: FloatingDropdownOptionProps) => {
    if (!selectedOption) {
      return;
    }
    if (this.props.onChange) {
      this.props.onChange(selectedOption);
    }
  };

  _onCoreSelect = (selectedCoreOption: Option) => {
    if (!selectedCoreOption) {
      return;
    }
    const selectedOption = this.props.options.find(
      ({ id }) => selectedCoreOption.id === id,
    );
    this._onSelect(selectedOption);
  };

  _generateCoreOptions() {
    const { options } = this.props;

    const coreOptions = options.map(option =>
      option.divider
        ? OptionFactory.createDivider({ className: classes.optionDivider })
        : OptionFactory.create({
            ...option,
            render: () => <DropdownOption {...option} />,
          }),
    );

    return {
      coreOptions,
    };
  }

  _getContent(mobile) {
    const {
      ['aria-label']: ariaLabel,
      ['aria-labelledby']: ariaLabelledBy,
      disabled,
      forceContentElementVisibility,
      label,
      placeholder,
      value,
      options,
      name,
      id,
      placement,
    } = this.props;
    const { coreOptions } = this._generateCoreOptions();

    const baseElement = (
      <FloatingDropdownBase
        className={classes.floatingDropdownBase}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        disabled={disabled}
        label={label}
        placeholder={placeholder}
        value={value}
        name={name}
        mobile={mobile}
        options={options}
        id={id}
        onChange={this._onSelect}
      />
    );

    return mobile ? (
      baseElement
    ) : (
      <CoreDropdown
        className={classes.dropdown}
        data-hook={DATA_HOOKS.coreDropdown}
        data-mobile={mobile}
        forceContentElementVisibility={forceContentElementVisibility}
        initialSelectedIds={value ? [value] : []}
        onInitialSelectedOptionsSet={() => {}}
        onDeselect={this._onCoreSelect}
        onSelect={this._onCoreSelect}
        openTrigger={'click'}
        disabled={disabled}
        options={coreOptions}
        placement={placement}
      >
        {baseElement}
      </CoreDropdown>
    );
  }

  render() {
    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div
            data-mobile={mobile}
            data-hook={this.props['data-hook']}
            className={st(classes.root, { mobile }, this.props.className)}
          >
            {this._getContent(mobile)}
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
