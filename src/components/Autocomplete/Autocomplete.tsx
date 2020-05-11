import * as React from 'react';
import {
  Autocomplete as CoreAutocomplete,
  AutocompleteProps as CoreAutocompleteProps,
} from 'wix-ui-core/autocomplete';
import { withStylable } from 'wix-ui-core/withStylable';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';
import * as styleSheet from './Autocomplete.st.css';
import { ErrorMessageWrapper, ErrorProps } from '../ErrorMessageWrapper';
import { TPAComponentProps } from '../../types';

export interface TPAAutocompleteProps extends TPAComponentProps {
  /** the error message to display */
  errorMessage?: string;
  /** apply error state*/
  error?: boolean;
}

export type AutocompleteProps = TPAAutocompleteProps & CoreAutocompleteProps & TPAComponentProps;

const AutocompleteWithErrorStates = withStylable<
  CoreAutocompleteProps,
  ErrorProps
>(CoreAutocomplete, styleSheet, ({ error }) => ({ error }));

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
            <span className={styleSheet.classes.suffix}>
              {
                <ChevronDown
                  width={14}
                  height={14}
                  viewBox="8 7 9 10"
                  className={styleSheet.classes.arrowIcon}
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
