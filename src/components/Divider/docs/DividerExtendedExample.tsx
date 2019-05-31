import * as React from 'react';
import { Divider } from '../Divider';
import extendedStyles from './DividerExtendedExample.st.css';

export const DividerExtendedExample = props => (
  <Divider {...props} {...extendedStyles('root', {}, props)} />
);
