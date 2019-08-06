import * as React from 'react';
import { IconButton } from '../../IconButton';
import { ReactComponent as CloseIcon } from '../../../assets/icons/Close.svg';
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
