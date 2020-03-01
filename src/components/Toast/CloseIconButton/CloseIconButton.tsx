import * as React from 'react';
import { IconButton } from '../../IconButton';
import { Close_S as CloseIcon } from '../../Icons/Close_S';
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
