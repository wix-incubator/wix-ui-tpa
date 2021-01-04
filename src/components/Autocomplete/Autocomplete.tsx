import * as React from 'react';
import {
  Autocomplete as CoreAutocomplete,
  AutocompleteProps as CoreAutocompleteProps,
} from 'wix-ui-core/autocomplete';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';
import { st, classes } from './Autocomplete.st.css';
import { ErrorMessageWrapper } from '../ErrorMessageWrapper';
import { TPAComponentProps } from '../../types';

export interface TPAAutocompleteProps extends TPAComponentProps {
  /** the error message to display */
  errorMessage?: string;
  /** apply error state*/
  error?: boolean;
}

export type AutocompleteProps = TPAAutocompleteProps &
  CoreAutocompleteProps &
  TPAComponentProps;

export type AutocompleteType = React.FunctionComponent<AutocompleteProps> & {
  createOption: typeof CoreAutocomplete.createOption;
  createDivider: typeof CoreAutocomplete.createDivider;
};

export const Autocomplete: AutocompleteType = ((props: AutocompleteProps) => {
  const {
    errorMessage,
    error,
    suffix,
    className,
    ...coreAutocompleteProps
  } = props;
  const { disabled } = props;

  return (
    <ErrorMessageWrapper
      error={error}
      errorMessage={errorMessage}
      disabled={disabled}
      render={(errorProps) => (
        <CoreAutocomplete
          className={st(classes.root, { error }, className)}
          {...coreAutocompleteProps}
          error={errorProps.error}
          data-hook={props['data-hook']}
          suffix={
            <span className={classes.suffix}>
              <ChevronDown
                width={14}
                height={14}
                viewBox="8 7 9 10"
                className={classes.arrowIcon}
              />
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
