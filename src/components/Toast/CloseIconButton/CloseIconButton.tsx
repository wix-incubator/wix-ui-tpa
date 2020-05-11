import * as React from 'react';
import { IconButton } from '../../IconButton';
import { Close as CloseIcon } from '../../../assets/icons';
import { st, classes } from './CloseIconButton.st.css';

export const CloseIconButton = function(props) {
  return (
    <IconButton
      icon={<CloseIcon />}
      className={st(classes.root)}
      {...props}
    />
  );
};
