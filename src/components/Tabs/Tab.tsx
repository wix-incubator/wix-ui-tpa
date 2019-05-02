import * as React from 'react';
import classNames from 'classnames';
import { isSelectKey } from './Tabs';
import style from './Tabs.st.css';

function Tab({ index, isActive, title, onClick }) {
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
      data-hook={`tab-item-${index}`}
      data-index={index}
      key={`${title}-${index}`}
      onClick={onSelectTab}
      onKeyDown={onKeyDown}
      className={classNames(style.tab, {
        [style.activeTab]: isActive,
      })}
      tabIndex={0}
    >
      {title}
    </div>
  );
}

export { Tab };
