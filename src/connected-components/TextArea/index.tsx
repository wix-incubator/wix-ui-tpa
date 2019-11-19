import * as React from 'react';
import styles from './TextArea.st.css';
import { TextArea as TextAreaOrig } from '../../components/TextArea';

export const TextArea = props => (
  <TextAreaOrig {...props} {...styles('root', {}, props)} />
);
