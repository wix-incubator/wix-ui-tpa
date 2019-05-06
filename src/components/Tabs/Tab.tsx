import * as React from 'react';
import { isSelectKey } from './TabsUI';

function Tab({ index, className, title, onClick, tabRef }) {
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
      className={className}
      tabIndex={0}
      ref={tabRef}
    >
      {title}
    </div>
  );
}

export { Tab };
