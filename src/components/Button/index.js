import React from 'react';
import CoreButton from 'wix-ui-core/Button';
import {ResponsiveThemedComponent} from '../../ResponsiveThemedComponent';

const Button = ({theme, events, ...coreProps}) => (
  <ResponsiveThemedComponent theme={theme} events={events}>
    <CoreButton {...coreProps}/>
  </ResponsiveThemedComponent>
);

Button.propTypes = {
  ...CoreButton.propTypes
};

export default Button;
