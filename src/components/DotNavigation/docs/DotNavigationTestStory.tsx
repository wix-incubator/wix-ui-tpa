import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { DotNavigation } from '..';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const renderTest = () => (
  <DotNavigation noOpacityTransition data-hook={'storybook-DotNavigation'} />
);

storiesOf(StoryCategory.TESTS, module).add('DotNavigation', renderTest);
