import * as React from 'react';
import {Autocomplete as CoreAutocomplete, AutocompleteProps as CoreAutocompleteProps} from 'wix-ui-core/Autocomplete';
import {withStylable} from 'wix-ui-core/withStylable';
import ChevronDown from 'wix-ui-icons-common/ChevronDown'; //TODO
import style from './Autocomplete.st.css';
import {ErrorMessageWrapper} from '../../baseComponents/ErrorMessageWrapper';
import {ErrorProps} from '../../baseComponents/ErrorMessageWrapper/ErrorMessageWrapper';

export interface TPAAutocompleteProps {
  /** the error message to display */
  errorMessage?: string;
  /** apply error state*/
  error?: boolean;
}

export type AutocompleteProps = TPAAutocompleteProps & CoreAutocompleteProps;

const AutocompleteWithErrorStates = withStylable<CoreAutocompleteProps, ErrorProps>(
  CoreAutocomplete,
  style,
  ({error, empty}) => ({error, empty})
);

export type AutocompleteType = React.SFC<AutocompleteProps> & {
  createOption: typeof CoreAutocomplete.createOption;
  createDivider: typeof CoreAutocomplete.createDivider;
};

export const Autocomplete: AutocompleteType = ((props: AutocompleteProps) => {
  const {errorMessage, error, suffix, ...coreAutocompleteProps} = props;
  const {disabled} = props;

  return (
    <ErrorMessageWrapper
      error={error}
      errorMessage={errorMessage}
      inputValue={'always-on'}
      disabled={disabled}
      render={(errorProps) => (
        <AutocompleteWithErrorStates
          {...coreAutocompleteProps}
          error={errorProps.error}
          empty={errorProps.empty}
          suffix={
            <span className={style.suffix}>
            {<ChevronDown className={style.arrowIcon}/>}
              {suffix}
          </span>
          }/>
      )}
    />);
}) as AutocompleteType;

Autocomplete.createOption = CoreAutocomplete.createOption;
Autocomplete.createDivider = CoreAutocomplete.createDivider;
