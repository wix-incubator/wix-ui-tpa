import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import { StoryCategory } from './storyHierarchy';
const README = require('../README.md').default;
const Usage = require('../docs/USAGE.md').default;
const HOW_TO_OVERRIDE_STYLES_PROPERLY = require('../docs/HOW_TO_OVERRIDE_STYLES_PROPERLY.md').default;
const RTL = require('../docs/RTL.md').default;
const Contribution = require('../docs/CONTRIBUTION.md').default;
const ComponentGuideline = require('../docs/COMPONENT_GUIDELINES.md').default;

storiesOf(StoryCategory.CONSUMING, module)
  .add('Overview', () => <Markdown source={README} />)
  .add('Using the library', () => <Markdown source={Usage} />)
  .add('How to override styles properly', () => (
    <Markdown source={HOW_TO_OVERRIDE_STYLES_PROPERLY} />
  ))
  .add('RTL Support', () => <Markdown source={RTL} />);

storiesOf(StoryCategory.CONTRIBUTION, module)
  .add('Contributing', () => <Markdown source={Contribution} />)
  .add('Component Guidelines', () => <Markdown source={ComponentGuideline} />);
