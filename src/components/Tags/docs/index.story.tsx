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
import * as TagsWiringExampleRaw from '!raw-loader!./TagsWiringExample.tsx';
import * as TagsWiringExampleCSSRaw from '!raw-loader!./TagsWiringExample.st.css';
import { TagsWiringExample } from './TagsWiringExample';
import { Tags } from '../';
import { ALIGNMENT, SIZE, SKIN } from '../constants';
import { TPAComponentsProvider } from '../../TPAComponentsConfig';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

const items = Array(20)
  .fill('')
  .map((item, index) => ({
    title: `Title ${index + 1}`,
    checked: index % 3 === 0,
    value: `value ${index + 1}`,
  }));

const exampleItems = [
  { label: 'few items', value: items.slice(0, 4) },
  { label: 'many items', value: items },
];

function ExampleTags(props) {
  const [rtl, setRtl] = React.useState(false);
  const [update, forceUpdate] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    if (rootRef && rootRef.current) {
      const observer = new MutationObserver(mutationsList => {
        mutationsList.map(mutation => {
          if (mutation.attributeName === 'dir') {
            setRtl(
              (rootRef.current.parentNode as any).getAttribute('dir') === 'rtl',
            );
          }
        });
      });

      observer.observe(rootRef.current.parentNode, { attributes: true });

      return function cleanup() {
        observer.disconnect();
      };
    }
  }, [rootRef]);

  return (
    <div ref={rootRef}>
      <TPAComponentsProvider value={{ mobile: false, rtl }}>
        <Tags
          {...props}
          onClick={item => {
            item.checked = !item.checked;
            forceUpdate(!update);
          }}
        />
      </TPAComponentsProvider>
    </div>
  );
}

export default {
  category: 'Components',
  storyName: 'Tags',
  component: ExampleTags,
  componentPath: '../Tags.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Tags',
    items: exampleItems[1].value,
    alignment: ALIGNMENT.center,
    size: SIZE.medium,
    skin: SKIN.solid,
  }),
  exampleProps: {
    items: exampleItems,
    alignment: Object.keys(ALIGNMENT).map(key => ALIGNMENT[key]),
    size: Object.keys(SIZE).map(key => SIZE[key]),
    skin: Object.keys(SKIN).map(key => SKIN[key]),
  },
  dataHook: 'storybook-Tags',
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
              title: 'Tags Panel',
              example: <TagsWiringExample />,
              rawSource: TagsWiringExampleRaw,
              rawCSSSource: TagsWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Text Color',
                    wixParam: 'textColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Background Color',
                    wixParam: 'bgColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Border Color',
                    wixParam: 'borderColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Hover Text Color',
                    wixParam: 'hoverTextColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Hover Background Color',
                    wixParam: 'hoverBgColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Hover Border Color',
                    wixParam: 'hoverBorderColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Selected Text Color',
                    wixParam: 'checkedTextColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Selected Background Color',
                    wixParam: 'checkedBgColor',
                    defaultColor: 'color-8',
                  },
                ],
                fonts: [],
                numbers: [
                  {
                    label: 'Border Width',
                    wixParam: 'borderWidth',
                    defaultNumber: 1,
                    unit: 'px',
                    max: 10,
                  },
                  {
                    label: 'Border Radius',
                    wixParam: 'borderRadius',
                    defaultNumber: 0,
                    unit: 'px',
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
