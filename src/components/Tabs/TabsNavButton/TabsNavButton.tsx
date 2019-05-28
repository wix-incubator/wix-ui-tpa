import * as React from 'react';
import style from './TabsNavButton.st.css';
import { isSelectKey } from '../utils';

interface TabsNavButtonProps {
  onClick(): void;
  className: string;
  dataHook: string;
  tabIndex: number;
}

export const TabsNavButton: React.FunctionComponent<TabsNavButtonProps> = ({
  onClick,
  children,
  tabIndex,
  className,
  dataHook,
}) => {
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
      data-hook={dataHook}
    >
      {children}
    </div>
  );
};
