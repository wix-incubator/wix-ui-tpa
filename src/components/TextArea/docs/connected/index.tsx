import * as React from 'react';
import { classes } from './TextAreaOverrides.st.css';
import { TextArea } from '../../TextArea';

const TextAreaConnected = (props) => (
  <TextArea {...props} className={classes.root} />
);
TextAreaConnected.displayName = 'TextArea';

export { TextAreaConnected };
