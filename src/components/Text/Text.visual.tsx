import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { Text, TEXT_PRIORITY } from '../Text';

visualize('Text', () => {
  story('Basic', () => {
    snap('default props', <Text>Here is some text</Text>);
    snap(
      'with secondary priority',
      <Text priority={TEXT_PRIORITY.secondary}>Here is some text</Text>,
    );
  });
});
