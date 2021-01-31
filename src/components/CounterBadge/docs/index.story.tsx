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
import { CounterBadgeExtendedExample } from './CounterBadgeExtendedExample';
import * as staticExampleOverrides from '../CounterBadge.visual.st.css';
import * as StaticExampleOverrides from '!raw-loader!../CounterBadge.visual.st.css';
import * as exampleOverrides from './CounterBadgeExtendedExample.st.css';
import * as ExtendedRawSource from '!raw-loader!./CounterBadgeExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./CounterBadgeExtendedExample.st.css';
import { StoryCategory } from '../../../../stories/storyHierarchy';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import { OptimizedStylesBanner } from '../../../../stories/OptimizedStylesBanner';

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
    'data-hook': 'storybook-CounterBadge',
    value: 4,
    priority: COUNTER_BADGE_PRIORITY.primary,
    maximum: 99,
  }),
  exampleProps: {
    priority: Object.values(COUNTER_BADGE_PRIORITY),
  },
  dataHook: 'storybook-CounterBadge',
  sections: [
    header({
      component: <OptimizedStylesBanner />,
    }),
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
              'The Counter Badge component has 2 different skins to apply: `primary` and `secondary`. The default value is primary.',
            source: examples.priority,
          }),
          example({
            title: 'Maximum Validation',
            description:
              'The Counter Badge perform maximum validations and has default of 99 but can be changed.',
            source: examples.validationMaximum,
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
    <CounterBadge className={classes.mixPriorityPrimary} value={11} />
  </div>
  );
}
`,
            },
            { classes: exampleOverrides.classes },
          ),
          example(
            {
              title: 'Style params override with statics',
              description:
                'Override specific style variables to customize the component with override from pallete or statics.',
              source: `() => {
\`
//MyComponent.st.css
${(StaticExampleOverrides as any).default}\`

return (
  <div style={{'display': 'flex', gap: '16px'}}>
    <CounterBadge className={classes.paletteStyleParams} value={18} />
    <CounterBadge className={classes.staticStyleParams} value={25} />
  </div>
  );
}
`,
            },
            { classes: staticExampleOverrides.classes },
          ),
        ],
      }),
      tab({
        title: 'Playground',
        sections: [playground(), autoSettingsPanel()],
      }),
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
            example: <CounterBadgeExtendedExample />,
            rawSource: ExtendedRawSource,
            rawCSSSource: ExtendedCSSRawSource,
            title: 'CounterBadge Extended',
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
