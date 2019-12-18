import * as React from 'react';
import * as examples from './examples';
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
import * as ShareButtonWiringExampleRaw from '!raw-loader!./ShareButtonWiringExample.tsx';
import * as ShareButtonWiringExampleCSSRaw from '!raw-loader!./ShareButtonWiringExample.st.css';
import { ShareButtonWiringExample } from './ShareButtonWiringExample';
import { ShareButton } from '../';
import { IconButton } from '../../IconButton';
import { Share } from '../../../assets/icons';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components/Share',
  storyName: 'ShareButton',
  component: ShareButton,
  componentPath: '../ShareButton.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-ShareButton',
    title: 'Share title',
    url: 'https://wix.com',
    renderButton: props => <IconButton {...props} icon={<Share />} />,
    onClick: sharePromise => {
      if (!sharePromise) {
        alert('share clicked');
      }
    },
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-ShareButton',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[{ title: 'Example', source: examples.example }].map(code),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'ShareButton Panel',
              example: <ShareButtonWiringExample />,
              rawSource: ShareButtonWiringExampleRaw,
              rawCSSSource: ShareButtonWiringExampleCSSRaw,
              params: {
                colors: [],
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
