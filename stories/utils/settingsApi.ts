import * as React from 'react';
import { genericApiTable, IGenericApiItem } from './GenericApi';

interface ISettingsApiVariable extends IGenericApiItem {
  name: string;
  dataType: string;
  defaultValue: string;
  description: string;
}

interface ISettingsApiConfig {
  variables: ISettingsApiVariable[];
}

export const settingsApi = ({ variables }: ISettingsApiConfig) => {
  return genericApiTable({
    title: 'Stylable Variables',
    columns: {
      name: 'Variable name',
      dataType: 'Value type',
      defaultValue: 'Default value',
      description: 'Description',
    },
    items: variables,
  });
};
