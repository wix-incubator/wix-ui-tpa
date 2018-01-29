import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {TpaToggleSwitchStory} from './TpaToggleSwitchStory/TpaToggleSwitchStory';
import styleProcessor from 'wix-style-processor';

styleProcessor.init();

storiesOf('Components', module)
    .add('TpaToggleSwitch', () => (
        <TpaToggleSwitchStory />
    ));
