import * as React from 'react';
import styles from './TextAreaOverrides.st.css';
import { TextArea } from '../../TextArea';

const TextAreaConnected = props => (
  <TextArea {...props} {...styles('root', {}, props)} />
);
TextAreaConnected.displayName = 'TextArea';

export { TextAreaConnected };
