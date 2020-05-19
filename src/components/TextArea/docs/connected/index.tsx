import * as React from 'react';
import { st, classes } from './TextAreaOverrides.st.css';
import { TextArea } from '../../TextArea';

const TextAreaConnected = props => (
  <TextArea className={st(classes.root)} {...props} />
);
TextAreaConnected.displayName = 'TextArea';

export { TextAreaConnected };
