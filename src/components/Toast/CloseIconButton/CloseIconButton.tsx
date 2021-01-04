import * as React from 'react';
import { IconButton } from '../../IconButton';
import { ReactComponent as CloseIcon } from '../../../assets/icons/Close.svg';
import { classes } from './CloseIconButton.st.css';

export const CloseIconButton = function (props) {
  return (
    <IconButton icon={<CloseIcon />} {...props} className={classes.root} />
  );
};
