import * as React from 'react';
import style from './TabsNavButton.st.css';
import { isSelectKey } from '../../../common/keyCodes';
import { TPAComponentProps } from '../../../types';

interface TabsNavButtonProps extends TPAComponentProps {
  onClick(): void;
  tabIndex: number;
}

export const TabsNavButton: React.FunctionComponent<TabsNavButtonProps> = props => {
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
      <div className={style.border} />
    </div>
  );
};
