import * as React from 'react';
import { st, classes } from './TextAreaOverrides.st.css';
import { TextArea } from '../../TextArea';

const TextAreaConnected = props => (
  <TextArea {...props} className={st(classes.root)} />
);
TextAreaConnected.displayName = 'TextArea';

export { TextAreaConnected };
