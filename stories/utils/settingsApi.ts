import * as React from 'react';
import { genericApiTable } from './GenericApi';
import { IComponentManifest } from './manifest.interface';

export const settingsApi = (componentManifest: IComponentManifest) => {
  const { variables } = componentManifest.stylable;

  return genericApiTable({
    title: 'Stylable Variables',
    columns: {
      name: 'Variable name',
      type: 'Value type',
      defaultValue: 'Default value',
      description: 'Description',
    },
    items: variables as any,
  });
};
