import * as React from 'react';
import {ButtonProps, Button} from '../../src/components/Button';
import extendedStyles from './ButtonExtendedWithStyleParamsExample.st.css';

export const ButtonExtendedWithStyleParamsExample: React.FunctionComponent<ButtonProps> = (props) =>
  <div>
    <Button {...props} {...extendedStyles('root', {}, props)}>Button</Button>
  </div>;
