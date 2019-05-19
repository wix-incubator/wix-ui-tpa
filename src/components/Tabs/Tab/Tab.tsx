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
  onClick(index: number): void;
  className: string;
}

export const Tab = React.forwardRef<HTMLDivElement, TabProps>((props, ref) => {
  const { index, item, onClick } = props;
  const title = item.title;
  const onSelectTab = () => {
    onClick(index);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const keyCode = e.keyCode;

    if (isSelectKey(keyCode)) {
      onSelectTab();
      return false;
    }
  };

  return (
    <div
      {...style('root', {}, props)}
      ref={ref}
      data-hook={`tab-item-${index}`}
      key={`${title}-${index}`}
      onClick={onSelectTab}
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      {title}
    </div>
  );
});
