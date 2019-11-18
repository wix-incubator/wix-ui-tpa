import * as React from 'react';
import { genericApiTable, IGenericApiItem } from './GenericApi';
import manifest from '../../ui-tpa-manifest.json';

export const settingsApi = (componentName: string) => {
  const componentManifest = manifest[componentName];

  if (!componentManifest) {
    return 'Could not load Settings API';
  }

  const { variables } = componentManifest.stylable;

  return genericApiTable({
    title: 'Stylable Variables',
    columns: {
      name: 'Variable name',
      type: 'Value type',
      defaultValue: 'Default value',
      description: 'Description',
    },
    items: variables,
  });
};
