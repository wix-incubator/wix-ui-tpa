import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
const README = require('../README.md').default;
const Usage = require('../docs/USAGE.md').default;
const Contribution = require('../docs/CONTRIBUTION.md').default;

storiesOf('Getting Started', module)
  .add('Introduction', () => <Markdown source={README} />)
  .add('Using the library', () => <Markdown source={Usage} />)
  .add('Contributing', () => <Markdown source={Contribution} />);
