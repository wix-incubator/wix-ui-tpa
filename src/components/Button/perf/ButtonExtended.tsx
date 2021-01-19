import * as React from 'react';
import { Button } from '../';
import { st, classes } from './ButtonExtended.st.css';

export const ButtonPerfer = () => {
  return <Button className={st(classes.root)}>Click</Button>;
};
