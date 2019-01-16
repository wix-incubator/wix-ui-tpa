import * as React from 'react';
import style from './Button.st.css';
import {ButtonNext} from 'wix-ui-core/button-next';
import {ButtonProps as ButtonNextProps} from 'wix-ui-core/dist/src/components/button-next/button-next';
// import { withEllipsedTooltip } from 'wix-ui-core/dist/src/hocs/EllipsedTooltip';

export enum PRIORITY {
  primary = 'primary',
  secondary = 'secondary'
}

export interface ButtonProps extends ButtonNextProps {
  dataHook?: string;
  priority?: PRIORITY;
}

const CoreButton = ({dataHook, priority, ...rest}) =>
  (<ButtonNext {...rest} data-hook={dataHook} {...style('root', {priority}, rest)}/>);

CoreButton.defaultProps = {
  priority: PRIORITY.primary
};

export const Button: React.SFC<ButtonProps> = CoreButton;
