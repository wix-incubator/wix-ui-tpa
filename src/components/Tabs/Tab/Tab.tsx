import * as React from 'react';
import { isSelectKey } from '../utils';
import style from './Tab.st.css';

export interface TabItem {
  /** Title of the tab */
  title?: string;
}

interface TabProps {
  item: TabItem;
  index: number;
  isActive: boolean;
  onClick(index: number): void;
  className: string;
  dataHook: string;
}

export const Tab = React.forwardRef<HTMLDivElement, TabProps>((props, ref) => {
  const { index, item, onClick, isActive, dataHook } = props;
  const title = item.title;
  const onSelectTab = () => {
    onClick(index);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const keyCode = e.keyCode;

    if (isSelectKey(keyCode)) {
      onSelectTab();
      e.preventDefault();
      return false;
    }
  };

  return (
    <div
      {...style('root', {}, props)}
      ref={ref}
      data-index={index}
      data-active={isActive}
      data-hook={dataHook}
      key={`${title}-${index}`}
      onClick={onSelectTab}
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <div className={style.content} tabIndex={-1}>
        {title}
        <div className={style.focusIndicator}/>
      </div>
    </div>
  );
});
