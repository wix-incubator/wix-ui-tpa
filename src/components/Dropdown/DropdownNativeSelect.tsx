import * as React from 'react';
import styles from './DropdownNativeSelect.st.css';
import dropdownStyles from './Dropdown.st.css';
import buttonStyles from '../Button/Button.st.css';
import { DATA_HOOKS, ICON_SIZE } from './constants';
import { ReactComponent as ArrowIcon } from '../../assets/icons/CaretDown.svg';
import { PRIORITY, SIZE } from '../Button';
import classNames from 'classnames';
import { DropdownOptionProps } from './DropdownOption';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { TPAComponentProps } from '../../types';
import { TooltipSkin } from '../Tooltip/TooltipEnums';
import { ReactComponent as ErrorIcon } from '../../assets/icons/Error.svg';
import { Tooltip } from '../Tooltip';

interface DropdownNativeSelectProps {
  selectedOption: DropdownOptionProps;
  options: DropdownOptionProps[];
  placeholder: string;
  disabled: boolean;
  error?: boolean;
  errorMessage?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

export const DropdownNativeSelect = (
  props: DropdownNativeSelectProps & TPAComponentProps,
) => {
  const {
    selectedOption,
    options,
    placeholder,
    error,
    errorMessage,
    ['aria-label']: ariaLabel,
    ['aria-labelledby']: ariaLabelledBy,
  } = props;

  const hasPlaceholder = !selectedOption || !selectedOption.value;

  return (
    <TPAComponentsConsumer>
      {({ rtl }) => (
        <div className={styles.wrapper}>
          {selectedOption && selectedOption.icon ? (
            <div className={styles.optionIcon}>{selectedOption.icon}</div>
          ) : null}
          <select
            {...buttonStyles(
              'root',
              {
                priority: PRIORITY.basic,
                size: SIZE.medium,
                fullWidth: true,
                mobile: true,
              },
              {},
            )}
            {...styles('root', { error, placeholder: hasPlaceholder, rtl }, {})}
            data-hook="native-select"
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            className={classNames(
              styles.root,
              buttonStyles.root,
              dropdownStyles.dropdownNativeSelect,
            )}
          >
            {hasPlaceholder && (
              <option value="" selected disabled>
                {placeholder}
              </option>
            )}
            {options.map((option, i) => (
              <option key={i} value={i} disabled={!option.isSelectable}>
                {option.value}
              </option>
            ))}
          </select>
          {error && errorMessage && (
            <Tooltip
              className={styles.errorIcon}
              data-hook={DATA_HOOKS.errorTooltip}
              placement="top-end"
              skin={TooltipSkin.Error}
              content={props.errorMessage}
            >
              <ErrorIcon width={ICON_SIZE} height={ICON_SIZE} />
            </Tooltip>
          )}
          <ArrowIcon
            className={styles.arrowIcon}
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
        </div>
      )}
    </TPAComponentsConsumer>
  );
};
