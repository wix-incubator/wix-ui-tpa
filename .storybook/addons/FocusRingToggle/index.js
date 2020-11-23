import addons, { makeDecorator } from '@storybook/addons';
import * as React from 'react';
import { ADDON_ID, ADDON_TITLE } from './shared';
import { useState } from 'react';
import FocusRing from '../../../stories/helperComponents/FocusRing';

const FocusRingToggle = makeDecorator({
  name: ADDON_TITLE,
  parameterName: ADDON_TITLE,
  allowDeprecatedUsage: true,
  wrapper: (getStory) => {
    const [active, setActive] = useState(false);
    const channel = addons.getChannel();

    channel.on(ADDON_ID + '/change', (params) => setActive(params.active));

    return <FocusRing active={active}>{getStory()}</FocusRing>;
  },
});

export default FocusRingToggle;
