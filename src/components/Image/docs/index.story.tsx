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
import * as examples from './examples';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'Image',
  component: Image,
  componentPath: '../Image.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Image',
    src:
      'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg',
    width: 300,
    height: 250,
    alt: 'Garfield smiles and puts his hand over chest',
  }),
  exampleProps: {
    mediaItem: [
      {
        label: 'None',
        value: null,
      },
      {
        label: 'An image from media manager',
        value: {
          uri: 'c5f754_91bd6af05038434a894097cd967c721a~mv2.jpg',
        },
      },
    ],
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
              title: 'Regular Image',
              description:
                'This example demonstrates the usage of an external image with a full URL.',
              source: examples.regularImageExample,
            },
            {
              title: 'Media Image',
              description:
                'This example demonstrates the usage of an item from the media manager.',
              source: examples.mediaImageExample,
            },
          ].map(code),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
