import * as React from 'react';
import { IconButton } from '../../IconButton';
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg';
import extendedStyles from './CloseIconButton.st.css';

export const CloseIconButton = function(props) {
  return (
    <IconButton
      icon={<PlusIcon />}
      {...extendedStyles('root', {}, props)}
      {...props}
    />
  );
};
