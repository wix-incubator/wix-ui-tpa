import * as React from 'react';
import {ButtonProps, Button} from '../../src/components/Button';
import extendedStyles from './ButtonExtendedExample.st.css';

export const ButtonExtendedExample: React.FunctionComponent<ButtonProps> = (props) =>
  <div>
    <Button {...props} {...extendedStyles('root', {}, props)}>BASIC</Button>
    <Button priority="primary" {...props} {...extendedStyles('root', {}, props)}>PRIMARY</Button>
    <Button priority="secondary" {...props} {...extendedStyles('root', {}, props)}>SECONDARY</Button>
  </div>;
