import * as React from 'react';
import { ReactComponent as ErrorIcon } from '../../assets/icons/Error.svg';
import { TooltipSkin } from '../Tooltip/TooltipEnums';
import { Tooltip } from '../Tooltip';
import { TPAComponentProps } from '../../types';
import { DATA_HOOKS, ICON_SIZE } from './constants';
import styles from './DropdownError.st.css';

interface DropdownErrorProps {
  errorMessage: string;
}

export const DropdownError: React.FC<DropdownErrorProps &
  TPAComponentProps> = props => {
  return (
    <Tooltip
      {...styles('root', {}, props)}
      data-hook={DATA_HOOKS.errorTooltip}
      placement="top-end"
      skin={TooltipSkin.Error}
      content={props.errorMessage}
    >
      <ErrorIcon width={ICON_SIZE} height={ICON_SIZE} />
    </Tooltip>
  );
};
