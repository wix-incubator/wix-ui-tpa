import * as ImageWiringExampleCSSRaw from '!raw-loader!./ImageWiringExample.st.css';
import * as ImageWiringExampleRaw from '!raw-loader!./ImageWiringExample.tsx';
import LinkTo from '@storybook/addon-links/react';
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
import { Image } from '../';
import { OptimizedStylesBanner } from '../../../../stories/OptimizedStylesBanner';
import { StoryCategory } from '../../../../stories/storyHierarchy';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import * as examples from './examples';
import { ImageWiringExample } from './ImageWiringExample';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

const sampleSources = [
  {
    label: 'General Absolute URL',
    value:
      'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg',
  },
  {
    label: 'Relative URI of a Media Item',
    value: 'c5f754_91bd6af05038434a894097cd967c721a~mv2.jpg',
  },
];

const dataHook = 'storybook-Image';

export default {
  category: StoryCategory.WIP,
  storyName: 'Image',
  component: Image,
  componentPath: '../Image.tsx',
  componentProps: () => ({
    'data-hook': dataHook,
    src: sampleSources[0].value,
    width: 300,
    height: 250,
    alt: 'Garfield smiles and puts his hand over chest',
  }),
  exampleProps: {
    src: sampleSources,
    ...examples.commonExampleProps,
  },
  dataHook,
  sections: [
    header({
      component: <OptimizedStylesBanner />,
    }),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            '`Image` is a component to literally display an image - whether an absolute with full URL or a media platform item with relative URI.',
          ),

          description({
            text: [
              <p style={{ marginBottom: '20px' }} key={`${dataHook}-links`}>
                ⚠️ This component is mainly for general image usages - consider
                using{' '}
                <LinkTo kind={'Working In Progress'} story="HeroImage">
                  {'<HeroImage/>'}
                </LinkTo>{' '}
                and{' '}
                <LinkTo kind={'Working In Progress'} story="ThumbnailImage">
                  {'<ThumbnailImage/>'}
                </LinkTo>{' '}
                instead, which are meant for common TPAs use-cases.
              </p>,
            ],
          }),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'General Absolute URL',
              description:
                'This example demonstrates the usage of an external image with an absolute full URL.',
              source: examples.absoluteUrlExample,
            },
            {
              title: 'Relative URI of a Media Item',
              description:
                'This example demonstrates the usage of a media platform item with a relative URI.',
              source: examples.relativeUriExample,
            },
            {
              title: 'Dimensions',
              description:
                'The image supports fixed `width` and `height` values and this is the **optimal** way to render (both of performance and SEO aspects). In case the dimensions are not provided, they would be calculated based on the bounding rectangle and the aspect ratio. This means that if the parent element sets any dimensions, they would be used to calculate. If only one of the dimensions is provided, the other one would be calculated based on the provided dimension and aspect ratio.',
              source: examples.dimensionsExample,
            },
            {
              title: 'Resizing',
              description:
                'The image can be resized to fit its container, supporting two values - `contain` & `cover`. The `contain` option means to fill the container with the entire **image** as much as possible while keeping the aspect ratio but without cropping. In contrast, `cover` means to fill the **container** entirety while keeping the aspect ratio and cropping the outside areas if necessary.',
              source: examples.resizingExample,
            },
            {
              title: 'Aspect Ratio',
              description:
                'The proportional relationship between width and height of the image can be adjusted using `aspectRatio`. The prop also supports predefined values in order to apply their ratio - such as: `square`, `cinema` and `landscape`. As said, if one of the dimensions is missing, the aspect ratio would be used to calculate it.',
              source: examples.aspectRatioExample,
            },
            {
              title: 'Blurry Loading',
              description:
                'The image can be loaded progressively with a blur placeholder by setting the `loadingBehavior` as `blur`. Important to mention that an actual progressive loading would work only for a relative media image, whereas for an absolute image it would just have the same effect (but the image will not be loaded progressively). Also notice that the wrapper class and the button are only to allow simulating the behavior again easily.',
              source: examples.blurLoadingExample,
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
              title: 'Image Panel',
              example: <ImageWiringExample />,
              rawSource: ImageWiringExampleRaw,
              rawCSSSource: ImageWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Background color',
                    wixParam: 'backgroundColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Border color',
                    wixParam: 'borderColor',
                    defaultColor: 'color-1',
                  },
                ],
                numbers: examples.commonWiringNumberParams,
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
