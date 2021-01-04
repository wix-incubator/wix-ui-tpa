import * as React from 'react';
import { ReactComponent as ErrorIcon } from '../../assets/icons/Error.svg';
import { TooltipSkin } from '../Tooltip/TooltipEnums';
import { Tooltip } from '../Tooltip';
import { TPAComponentProps } from '../../types';
import { DATA_HOOKS, ICON_SIZE } from './constants';
import { st, classes } from './DropdownError.st.css';

interface DropdownErrorProps extends TPAComponentProps {
  errorMessage: string;
}

export const DropdownError: React.FC<DropdownErrorProps> = (props) => {
  return (
    <Tooltip
      className={st(classes.root, props.className)}
      data-hook={DATA_HOOKS.errorTooltip}
      placement="top-end"
      skin={TooltipSkin.Error}
      content={props.errorMessage}
    >
      <ErrorIcon width={ICON_SIZE} height={ICON_SIZE} />
    </Tooltip>
  );
};
