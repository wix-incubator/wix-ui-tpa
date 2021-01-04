import * as TooltipSource from '!raw-loader!../Tooltip.tsx';
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
  title,
} from 'wix-storybook-utils/Sections';
import { Tooltip } from '..';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { TooltipSkin } from '../TooltipEnums';
import * as examples from './examples';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const childrenExamples = [
  { label: 'Simple text', value: <span>Hover me for a tooltip!</span> },
];

const contentExamples = [
  { label: 'Simple text', value: 'Hello World' },
  {
    label: 'Long text',
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

const skinExamples = Object.values(TooltipSkin);

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'Tooltip',
  component: Tooltip,
  source: TooltipSource,
  componentPath: '../Tooltip.tsx',
  componentProps: {
    'data-hook': 'story-tooltip',
    content: contentExamples[0].value,
    children: childrenExamples[0].value,
    placement: 'top',
  },
  exampleProps: {
    children: childrenExamples,
    content: contentExamples,
    skin: skinExamples,
    placement: [
      'auto-start',
      'auto',
      'auto-end',
      'top-start',
      'top',
      'top-end',
      'right-start',
      'right',
      'right-end',
      'bottom-end',
      'bottom',
      'bottom-start',
      'left-end',
      'left',
      'left-start',
    ],
  },
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            '`Tooltip` is a component allowing to render a tooltip when hovering an element.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Basic Usage',
              source: examples.basic,
            },
          ].map(code),
        ],
      }),

      ...[
        { title: 'Playground', sections: [playground()] },
        { title: 'API', sections: [api()] },
        {
          title: 'Style API',
          sections: [settingsApi()],
        },
        { title: 'TestKit', sections: [testkit()] },
      ].map(tab),
    ]),
  ],
};
