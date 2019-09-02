import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { DotNavigation } from '..';

const renderTest = () => (
  <DotNavigation noOpacityTransition data-hook={'storybook-DotNavigation'} />
);

storiesOf('Tests', module).add('DotNavigation', renderTest);
