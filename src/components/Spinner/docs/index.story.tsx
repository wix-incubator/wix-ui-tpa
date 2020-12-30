import * as SpinnerWiringExampleCSSRaw from '!raw-loader!./SpinnerWiringExample.st.css';
import * as SpinnerWiringExampleRaw from '!raw-loader!./SpinnerWiringExample.tsx';
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
import { Spinner as SpinnerCore } from '../';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import { SpinnerProps, SPINNER_TYPES } from '../types';
import * as examples from './examples';
import { SpinnerWiringExample } from './SpinnerWiringExample';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

function Spinner(props: SpinnerProps) {
  return (
    <div
      style={{
        height: !props.isCentered ? 'auto' : props.diameter + 40,
        position: 'relative',
      }}
    >
      <SpinnerCore {...props} />
    </div>
  );
}
Spinner.defaultProps = SpinnerCore.defaultProps;

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'Spinner',
  component: Spinner,
  componentPath: '../Spinner.tsx',
  componentProps: () => ({
    diameter: 50,
    isCentered: false,
    'data-hook': 'storybook-Spinner',
  }),
  exampleProps: {
    type: Object.values(SPINNER_TYPES),
  },
  dataHook: 'storybook-Spinner',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            '`Spinner` is a component allowing to render a loading spinner for short processes that the user needs to wait.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            { title: 'Regular', source: examples.regular },
            { title: 'Slim', source: examples.slim },
            { title: 'Centered', source: examples.centered },
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
              title: 'Spinner Panel',
              example: <SpinnerWiringExample />,
              rawSource: SpinnerWiringExampleRaw,
              rawCSSSource: SpinnerWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Path Color',
                    wixParam: 'pathColor',
                    defaultColor: 'color-5',
                  },
                ],
                fonts: [],
                numbers: [],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
