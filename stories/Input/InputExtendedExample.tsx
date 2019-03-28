import * as React from 'react';
import {Input, InputProps} from '../../src/components/Input';
import extendedStyles from './InputExtendedExample.st.css';

export const InputExtendedExample: React.FunctionComponent<InputProps> = (props) => <Input {...props} {...extendedStyles('root', {}, props)}/>;
