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
    children: 'CounterBadge',
    priority: COUNTER_BADGE_PRIORITY.primary,
    maximum: 99,
  }),
  exampleProps: {
    priority: Object.values(COUNTER_BADGE_PRIORITY),
    minimum: 0,
    maximum: 99,
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
            title: 'Fromating',
            description:
              'The Counter Badge trim, and remove commas from positive numbers.',
            source: examples.formating,
          }),
          example({
            title: 'Minimum Validation',
            description:
              'The Counter Badge pefrom minimum valucation and has default of 0 but can be changed. (Below minimum return NULL)',
            source: examples.validationMinimum,
          }),
          example({
            title: 'Input Validation',
            description:
              'The Counter Badge pefrom input number validation on children and return NULL if not valid.',
            source: examples.validationInput,
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
    <CounterBadge className={classes.mixPrioritySecondary}>23</CounterBadge>
    <CounterBadge className={classes.mixPriorityPrimary}>1</CounterBadge>
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
      tab({ title: 'TestKit', sections: [testkit()] }),
    ]),
  ],
};
