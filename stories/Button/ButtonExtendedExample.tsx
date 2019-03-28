import * as React from 'react';
import {ButtonProps, Button} from '../../src/components/Button';
import extendedStyles from './ButtonExtendedExample.st.css';

export const ButtonExtendedExample: React.FunctionComponent<ButtonProps> =  (props) => <Button {...props} {...extendedStyles('root', {}, props)}/>;
