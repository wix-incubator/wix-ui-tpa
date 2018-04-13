import * as React from 'react';
import {Checkbox as CoreCheckbox, CheckboxProps as CoreCheckboxProps} from 'wix-ui-core/Checkbox';
import style from './Checkbox.st.css';
import {withStylable} from 'wix-ui-core/withStylable';
import {ErrorMessageWrapper} from '../../baseComponents/ErrorMessageWrapper';
import {ErrorProps} from '../../baseComponents/ErrorMessageWrapper/ErrorMessageWrapper';
import {CheckboxChecked, CheckboxIndeterminate} from 'wix-ui-icons-common/system';

export interface TPACheckboxProps {
  /** the error message to display */
  errorMessage?: string;
  /** apply error state*/
  error?: boolean;
  /** label text*/
  labelText?: string;
}
export type CheckboxProps = TPACheckboxProps & CoreCheckboxProps;

const CheckboxWithErrorStates = withStylable<CoreCheckboxProps, ErrorProps>(
  CoreCheckbox,
  style,
  ({error, empty}) => ({error, empty})
);

export const Checkbox: React.SFC<CheckboxProps> = (props: CheckboxProps) => {
  const {errorMessage, error, ...coreCheckboxProps} = props;
  const {value, disabled} = props;
  const additionalProps = {
    checkedIcon: (<CheckboxChecked size={14}/>),
    indeterminateIcon: (<CheckboxIndeterminate size={14}/>)
  };

  const renderLabelText = () => {
    const {labelText} = props;
    if (labelText) {
      return (<span className={style.label}>{labelText}</span>);
    }
    return null;
  };

  return (
    <ErrorMessageWrapper
      error={error}
      errorMessage={errorMessage}
      inputValue={(value as string)}
      disabled={disabled}
      render={(errorProps) => (
        <CheckboxWithErrorStates
          error={errorProps.error}
          empty={errorProps.empty}
          {...coreCheckboxProps}
          {...additionalProps}
          >
          {renderLabelText()}
        </CheckboxWithErrorStates>
      )}
      />
  );
};
