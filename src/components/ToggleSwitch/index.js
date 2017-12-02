import React from 'react';
import {func, array, object, oneOfType} from 'prop-types';
import CoreToggleSwitch from 'wix-ui-core/ToggleSwitch';
import {ResponsiveThemedComponent} from '../../ResponsiveThemedComponent';

const ToggleSwitch = ({theme, events, ...coreProps}) => (
  <ResponsiveThemedComponent theme={theme} events={events}>
    <CoreToggleSwitch {...coreProps}/>
  </ResponsiveThemedComponent>
);

ToggleSwitch.propTypes = {
  ...CoreToggleSwitch.propTypes,
  theme: oneOfType([func, object]),
  events: array
};

export default ToggleSwitch;
