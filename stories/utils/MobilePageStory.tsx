import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { StoryCategory } from '../storyHierarchy';

storiesOf(StoryCategory.TESTS, module).add('MobilePage', () => (
  <div id="mobile-root" />
));
