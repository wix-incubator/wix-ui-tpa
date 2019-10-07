import * as React from 'react';
import { StatusAlertSmall } from 'wix-ui-icons-common/dist/src';
import { TooltipSkin } from '../Tooltip/TooltipEnums';
import { Tooltip } from '../Tooltip';
import {DATA_HOOKS, ICON_SIZE} from './constants';

import styles from './DropdownError.st.css';

interface DropdownErrorProps {
  errorMessage: string;
}

export const DropdownError: React.FC<DropdownErrorProps> = props => {
  return (
    <Tooltip
      {...styles('root', {}, props)}
      data-hook={DATA_HOOKS.errorTooltip}
      placement="top-end"
      skin={TooltipSkin.Error}
      content={props.errorMessage}
    >
      <StatusAlertSmall width={ICON_SIZE} height={ICON_SIZE} />
    </Tooltip>
  );
};
