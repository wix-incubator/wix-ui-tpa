import React from 'react';
import CoreToggleSwitch from 'wix-ui-core/ToggleSwitch';
import {ResponsiveThemedComponent} from '../../ResponsiveThemedComponent';

const ToggleSwitch = ({theme, events, ...coreProps}) => (
  <ResponsiveThemedComponent theme={theme} events={events}>
    <CoreToggleSwitch {...coreProps}/>
  </ResponsiveThemedComponent>
);

ToggleSwitch.propTypes = {
  ...CoreToggleSwitch.propTypes
};

export default ToggleSwitch;
