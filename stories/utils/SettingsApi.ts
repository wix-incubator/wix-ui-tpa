import { genericApiTable } from './GenericApi';
import { plugin } from 'wix-storybook-utils/Sections';

export const settingsApi = () =>
  plugin({
    handler: (section, storyConfig) => {
      const variables = storyConfig.metadata.stylable.overridableVars;

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
    },
  });
