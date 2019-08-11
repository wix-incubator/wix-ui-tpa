import * as React from 'react';
import { IconButton } from '../../IconButton';
import { Close as CloseIcon } from '../../../assets/icons';
import extendedStyles from './CloseIconButton.st.css';

export const CloseIconButton = function(props) {
  return (
    <IconButton
      icon={<CloseIcon />}
      {...extendedStyles('root', {}, props)}
      {...props}
    />
  );
};
