import React from 'react';
import {func, array} from 'prop-types';
import CoreToggleSwitch from 'wix-ui-core/dist/src/components/ToggleSwitch';
import {ResponsiveThemedComponent} from '../../ResponsiveThemedComponent';

const ToggleSwitch = ({theme, events, ...coreProps}) => (
  <ResponsiveThemedComponent theme={theme} events={events}>
    <CoreToggleSwitch {...coreProps}/>
  </ResponsiveThemedComponent>
);

ToggleSwitch.propTypes = {
  ...CoreToggleSwitch.propTypes,
  theme: func,
  events: array
};

export default ToggleSwitch;
