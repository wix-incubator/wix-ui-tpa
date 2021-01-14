import * as React from 'react';
import { Counter } from '../';
import {
  header,
  api,
  divider,
  importExample,
  playground,
  tab,
  code as baseCode,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import * as ExtendedRawSource from '!raw-loader!./CounterExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./CounterExtendedExample.st.css';
import { CounterExtendedExample } from './CounterExtendedExample';
import { StoryCategory } from '../../../../stories/storyHierarchy';
import { CounterSize } from '../Counter';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'Counter',
  component: Counter,
  componentPath: '../Counter.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Counter',
    onChange: () => {},
    value: 15,
    step: 1,
    max: null,
    min: 0,
    error: false,
    disabled: false,
    incrementAriaLabel: 'increment',
    decrementAriaLabel: 'decrement',
    inputAriaLabel: 'amount',
    counterAriaLabel: 'I am an amount counter',
  }),
  exampleProps: {
    value: [5, 10, 100, 1000],
    step: [1, 10, 50, 100],
    max: [10, 100, 1000],
    min: [1, 10, 100],
    error: false,
    disabled: false,
    incrementAriaLabel: ['increment', 'plus'],
    decrementAriaLabel: ['decrement', 'minus'],
    inputAriaLabel: ['amount', 'value'],
    size: [CounterSize.medium, CounterSize.xSmall],
  },
  dataHook: 'storybook-Counter',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          importExample({
            source: `import { Counter } from 'wix-ui-tpa/dist/src/components/Counter';`,
          }),

          divider(),

          title('Examples'),

          ...[
            { title: 'Regular', source: `<Counter />` },
            { title: 'Disabled', source: `<Counter disabled={true} />` },
            {
              title: 'Error',
              source: `<Counter error={true} errorMessage="This is an error message"/>`,
            },
            {
              title: 'XSmall',
              source: `<Counter size='xSmall'/>`,
            },
          ].map(code),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Style API', sections: [settingsApi()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              example: <CounterExtendedExample />,
              rawSource: ExtendedRawSource,
              rawCSSSource: ExtendedCSSRawSource,
              title: 'Counter extended',
              params: {
                numbers: [
                  {
                    label: 'Counter Width',
                    wixParam: 'mainWidth',
                    defaultNumber: 96,
                    unit: 'px',
                    min: 96,
                    max: 720,
                  },
                ],
                colors: [
                  {
                    label: 'Main Color',
                    wixParam: 'mainColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Disabled Color',
                    wixParam: 'disabledColor',
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
