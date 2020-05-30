import * as React from 'react';
import { st, classes } from './Divider.st.css';
import { TPAComponentProps } from '../../types';

export const Divider = (props: TPAComponentProps) => (
  <div
    className={st(classes.root, props.className)}
    data-hook={props['data-hook']}
  />
);
