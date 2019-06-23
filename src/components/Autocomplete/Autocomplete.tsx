import * as React from 'react';
import {
  Autocomplete as CoreAutocomplete,
  AutocompleteProps as CoreAutocompleteProps,
} from 'wix-ui-core/autocomplete';
import { withStylable } from 'wix-ui-core/withStylable';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';
import style from './Autocomplete.st.css';
import { ErrorMessageWrapper, ErrorProps } from '../ErrorMessageWrapper';

export interface TPAAutocompleteProps {
  /** the error message to display */
  errorMessage?: string;
  /** apply error state*/
  error?: boolean;
}

export type AutocompleteProps = TPAAutocompleteProps & CoreAutocompleteProps;

const AutocompleteWithErrorStates = withStylable<
  CoreAutocompleteProps,
  ErrorProps
>(CoreAutocomplete, style, ({ error }) => ({ error }));

export type AutocompleteType = React.FunctionComponent<AutocompleteProps> & {
  createOption: typeof CoreAutocomplete.createOption;
  createDivider: typeof CoreAutocomplete.createDivider;
};

export const Autocomplete: AutocompleteType = ((props: AutocompleteProps) => {
  const { errorMessage, error, suffix, ...coreAutocompleteProps } = props;
  const { disabled } = props;

  return (
    <ErrorMessageWrapper
      error={error}
      errorMessage={errorMessage}
      disabled={disabled}
      render={errorProps => (
        <AutocompleteWithErrorStates
          {...coreAutocompleteProps}
          error={errorProps.error}
          suffix={
            <span className={style.suffix}>
              {
                <ChevronDown
                  width={14}
                  height={14}
                  viewBox="8 7 9 10"
                  className={style.arrowIcon}
                />
              }
              {suffix}
            </span>
          }
        />
      )}
    />
  );
}) as AutocompleteType;

Autocomplete.createOption = CoreAutocomplete.createOption;
Autocomplete.createDivider = CoreAutocomplete.createDivider;
