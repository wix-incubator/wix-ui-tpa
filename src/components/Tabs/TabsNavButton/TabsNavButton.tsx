import * as React from 'react';
import style from './TabsNavButton.st.css';
import { isSelectKey } from '../utils';

interface TabsNavButtonProps {
  onClick(): void;
  className: string;
  tabIndex: number;
  'data-hook': string;
}

export const TabsNavButton: React.FunctionComponent<
  TabsNavButtonProps
> = props => {
  const { onClick, children, tabIndex, className } = props;
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const keyCode = e.keyCode;

    if (isSelectKey(keyCode)) {
      onClick();
      return false;
    }
  };

  return (
    <div
      {...style('root', {}, { className })}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}
      data-hook={props['data-hook']}
    >
      {children}
    </div>
  );
};
