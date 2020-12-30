import * as PaginationWiringExampleCSSRaw from '!raw-loader!./PaginationWiringExample.st.css';
import * as PaginationWiringExampleRaw from '!raw-loader!./PaginationWiringExample.tsx';
import * as React from 'react';
import {
  api,
  code as baseCode,
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
} from 'wix-storybook-utils/Sections';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import { Pagination } from '../Pagination';
import * as examples from './examples';
import { PaginationWiringExample } from './PaginationWiringExample';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'Pagination',
  component: storyComponent(Pagination),
  componentPath: '../Pagination.tsx',

  componentProps: (setState) => ({
    'data-hook': 'storybook-Pagination',
    totalPages: 10,
    maxPagesToShow: 5,
    currentPage: 1,
    onChange: ({ page }) => setState({ currentPage: page }),
  }),

  exampleProps: {
    paginationMode: ['pages', 'input'],
    onChange: ({ page }) => `Selected page: ${page}`,
  },

  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            '`Pagination` is a component allowing to render a series of numbered pages for navigation.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          ...[
            {
              title: 'Basic Usage',
              source: examples.basic,
            },
          ].map(code),
        ],
      }),

      ...[
        { title: 'Playground', sections: [playground(), autoSettingsPanel()] },
        { title: 'API', sections: [api()] },
        { title: 'Style API', sections: [settingsApi()] },
        { title: 'TestKit', sections: [testkit()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'Pagination Panel',
              example: <PaginationWiringExample />,
              rawSource: PaginationWiringExampleRaw,
              rawCSSSource: PaginationWiringExampleCSSRaw,
              params: {
                fonts: [
                  {
                    label: 'Font',
                    wixParam: 'textFont',
                    defaultFont: 'arial',
                  },
                ],
                colors: [
                  {
                    label: 'Text color',
                    wixParam: 'textFontColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Selected text color',
                    wixParam: 'selectedTextFontColor',
                    defaultColor: 'color-8',
                  },
                  {
                    label: 'Disabled text color',
                    wixParam: 'disabledTextFontColor',
                    defaultColor: 'color-3',
                  },
                ],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
