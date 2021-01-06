import {
  api,
  code as baseCode,
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
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import * as examples from './examples';
import { StoryCategory } from '../../../../stories/storyHierarchy';

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

export default {
  category: StoryCategory.WIP,
  storyName: 'Image',
  component: Image,
  componentPath: '../Image.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Image',
    src: sampleSources[0].value,
    width: 300,
    height: 250,
    alt: 'Garfield smiles and puts his hand over chest',
  }),
  exampleProps: {
    src: sampleSources,
  },
  dataHook: 'storybook-Image',
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

          ...[
            {
              title: 'General Absolute URL',
              description:
                'This example demonstrates the usage of an image with an absolute full URL.',
              source: examples.absoluteUrlExample,
            },
            {
              title: 'Relative URI of a Media Item',
              description:
                'This example demonstrates the usage of a media platform item with a relative URI.',
              source: examples.relativeUriExample,
            },
            {
              title: 'Resizing',
              description:
                'The image can be resized to fit its container, supporting two values - `contain` & `cover`. The `contain` option means to fill the container with the entire **image** as much as possible while keeping the aspect ratio but without cropping. In contrast, `cover` means to fill the **container** entirety while keeping the aspect ratio and cropping the outside areas if necessary.',
              source: examples.resizingExample,
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
      ].map(tab),
    ]),
  ],
};
