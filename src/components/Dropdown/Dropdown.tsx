import * as React from 'react';
import { Dropdown as CoreDropdown } from 'wix-ui-core/dropdown';
import { TPAComponentsContext } from '../TPAComponentsConfig';
import { Text, TYPOGRAPHY } from '../Text';
import { DropdownBase } from './DropdownBase';
import { DropdownError } from './DropdownError';
import { DropdownOption, DropdownOptionProps } from './DropdownOption';
import { st, classes } from './Dropdown.st.css';
import { DATA_HOOKS } from './constants';
import { Placement } from 'wix-ui-core/popover';
import { DropdownNativeSelect } from './DropdownNativeSelect';
import { deprecationLog, wrap, unwrap } from '../../common/deprecationLog';
import { TPAComponentProps } from '../../types';
import { Option, OptionFactory } from 'wix-ui-core/dropdown-option';

export enum DROPDOWN_ALIGNMENT {
  center = 'center',
}

export interface DropdownProps extends TPAComponentProps {
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
  mobileNativeSelect?: boolean;
  /* use for visual test */
  forceContentElementVisibility?: boolean;
  upgrade?: boolean;
}

interface DefaultProps {
  placeholder: string;
  options: DropdownOptionProps[];
  placement: Placement;
  upgrade: boolean;
  mobileNativeSelect: boolean;
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
  static contextType = TPAComponentsContext;
  static defaultProps: DefaultProps = {
    placeholder: '',
    options: [],
    placement: 'bottom',
    mobileNativeSelect: false,
    upgrade: false,
  };
  constructor(props) {
    super(props);
    wrap('Button');
  }

  componentDidMount(): void {
    if (!this.props.upgrade) {
      deprecationLog(
        'Dropdown',
        'The current `Dropdown` component API will be deprecated in the next major version. Please use the `upgrade` prop in order to use the new API.',
      );
      unwrap('Button');
    }
  }

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

  private shouldRenderNativeSelect() {
    const { mobile: isMobile } = this.context;
    return this.props.mobileNativeSelect && isMobile;
  }

  private readonly onSelect = (selectedOption: DropdownOptionProps) => {
    if (!selectedOption) {
      return;
    }

    const { onChange } = this.props;
    this.setState({ selectedOption });
    onChange &&
      onChange(this.props.options.find(({ id }) => selectedOption.id === id));
  };

  private readonly onCoreSelect = (selectedCoreOption: Option) => {
    if (!selectedCoreOption) {
      return;
    }

    const selectedOption = this.props.options.find(
      ({ id }) => selectedCoreOption.id === id,
    );
    this.onSelect(selectedOption);
  };

  private readonly renderNativeSelect = () => {
    const {
      options,
      placeholder,
      disabled,
      error,
      errorMessage,
      ['aria-label']: ariaLabel,
      ['aria-labelledby']: ariaLabelledBy,
    } = this.props;

    return (
      <DropdownNativeSelect
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        disabled={disabled}
        className={classes.dropdownNativeSelect}
        error={error}
        errorMessage={errorMessage}
        options={options}
        onSelect={selectedOption => this.onSelect(selectedOption)}
        placeholder={placeholder}
        selectedOption={this.state.selectedOption}
      />
    );
  };

  private readonly renderCoreDropdown = () => {
    const {
      placeholder,
      disabled,
      error,
      errorMessage,
      options,
      forceContentElementVisibility,
      placement,
      upgrade,
      ['aria-label']: ariaLabel,
      ['aria-labelledby']: ariaLabelledBy,
    } = this.props;

    const { rtl, mobile: isMobile } = this.context;
    const { selectedOption } = this.state;

    const renderableOptions = options.map(option => ({
      ...option,
      render: () => (
        <DropdownOption className={classes.dropdownOption} {...option} />
      ),
    }));

    const coreOptions = renderableOptions.map(OptionFactory.create);

    return (
      <CoreDropdown
        className={classes.dropdown}
        placement={placement}
        data-hook={DATA_HOOKS.coreDropdown}
        data-mobile={isMobile}
        openTrigger={'click'}
        options={coreOptions}
        onDeselect={this.onCoreSelect}
        onSelect={this.onCoreSelect}
        initialSelectedIds={selectedOption ? [selectedOption.id] : []}
        onInitialSelectedOptionsSet={() => {}}
        forceContentElementVisibility={forceContentElementVisibility}
      >
        <DropdownBase
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          className={classes.dropdownBase}
          selectedOption={selectedOption}
          placeholder={placeholder}
          disabled={disabled}
          error={error}
          upgrade={upgrade}
          rtl={rtl}
        />
        {error && errorMessage && (
          <DropdownError
            className={classes.dropdownError}
            errorMessage={errorMessage}
          />
        )}
      </CoreDropdown>
    );
  };

  render() {
    const { label, alignment, className } = this.props;

    const { mobile } = this.context;

    return (
      <div
        className={st(
          classes.root,
          {
            alignment,
            mobile,
          },
          className,
        )}
        data-mobile={mobile}
        data-hook={this.props['data-hook']}
      >
        {label && (
          <Text className={classes.label} typography={TYPOGRAPHY.runningText}>
            {label}
          </Text>
        )}
        {this.shouldRenderNativeSelect()
          ? this.renderNativeSelect()
          : this.renderCoreDropdown()}
      </div>
    );
  }
}
