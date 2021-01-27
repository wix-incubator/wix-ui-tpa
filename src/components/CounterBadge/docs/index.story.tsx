import * as React from 'react';
import { CounterBadge, COUNTER_BADGE_PRIORITY } from '../';
import * as examples from './examples';
import {
  description,
  header,
  api,
  divider,
  importExample,
  playground,
  tab,
  example as baseExample,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';
import * as exampleOverrides from './CounterBadgeExtendedExample.st.css';
import * as ExtendedCSSRawSource from '!raw-loader!./CounterBadgeExtendedExample.st.css';
import { StoryCategory } from '../../../../stories/storyHierarchy';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import * as ExtendedExample from '!raw-loader!./CounterBadgeExtendedExample.tsx';

const example = (config, extraContext = {}) =>
  baseExample({
    components: { ...allComponents, ...extraContext },
    compact: true,
    ...config,
  });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'CounterBadge',
  component: CounterBadge,
  componentPath: '../CounterBadge.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Badge',
    value: 4,
    priority: COUNTER_BADGE_PRIORITY.primary,
    maximum: 99,
  }),
  exampleProps: {
    priority: Object.values(COUNTER_BADGE_PRIORITY),
  },
  dataHook: 'storybook-CounterBadge',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            'Counter Badge component is used to display a counter (Positive rounded number) in budge mode.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          example({
            title: 'Priority skins',
            description:
              'The Counter Badge component has different skins to apply.',
            source: examples.priority,
          }),
          example({
            title: 'Maximum Validation',
            description:
              'The Counter Badge perform maximum validations and has default of 99 but can be changed.',
            source: examples.validationMaximum,
          }),
          example({
            title: 'Rounding value',
            description: 'The Counter Badge flooring the prop value.',
            source: examples.formating,
          }),
          example(
            {
              title: 'Style params override',
              description:
                'Override specific style variables to customize the component. Go to the "Settings Panel" and start changing colors, see how it reflects this one as well',
              source: `() => {
  \`
//MyComponent.st.css
${(ExtendedCSSRawSource as any).default}\`

return (
  <div style={{'display': 'flex', gap: '16px'}}>
    <CounterBadge className={classes.mixPrioritySecondary} value={23} />
    <CounterBadge className={classes.mixPriorityPrimary} value={1} />
  </div>
  );
}
`,
            },
            { classes: exampleOverrides.classes },
          ),
        ],
      }),
      tab({ title: 'Playground', sections: [playground()] }),
      tab({ title: 'API', sections: [api()] }),
      {
        title: 'Style API',
        sections: [settingsApi()],
      },
      tab({ title: 'TestKit', sections: [testkit()] }),
      tab({
        title: 'Settings Panel',
        sections: [
          settingsPanel({
            example: <CounterBadge value={8} />,
            rawSource: ExtendedExample,
            rawCSSSource: ExtendedCSSRawSource,
            title: 'Badge Extended',
            params: {
              colors: [
                {
                  label: 'CounterBadge background color',
                  wixParam: 'counterBadgeBgColor',
                  defaultColor: 'color-5',
                },
                {
                  label: 'CounterBadge text color',
                  wixParam: 'counterBadgeTextColor',
                  defaultColor: 'color-1',
                },
              ],
            },
          }),
        ],
      }),
    ]),
  ],
};
