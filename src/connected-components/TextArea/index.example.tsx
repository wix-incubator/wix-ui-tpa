import * as React from 'react';
import styles from './TextArea.st.css';
import { TextArea as TextAreaOrig } from 'wix-ui-tpa/TextArea';

export const TextArea = props => (
  <TextAreaOrig {...props} {...styles('root', {}, props)} />
);