import * as React from 'react';
import {Divider} from '../../src/components/Divider';
import extendedStyles from './DividerExtendedExample.st.css';

export const DividerExtendedExample = (props) => <Divider {...props} {...extendedStyles('root', {}, props)}/>;
