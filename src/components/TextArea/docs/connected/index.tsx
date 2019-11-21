import * as React from 'react';
import styles from './TextAreaOverrides.st.css';
import { TextArea as TextAreaOrig } from '../../TextArea';

export const TextArea = props => (
  <TextAreaOrig {...props} {...styles('root', {}, props)} />
);
