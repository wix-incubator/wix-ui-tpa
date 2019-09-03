import * as React from 'react';
import { isSelectKey } from '../../../common/keyCodes';
import style from './Tab.st.css';
import { TABS_DATA_KEYS } from '../dataHooks';

export interface TabItem {
  /** Title of the tab */
  title?: string;
}

interface TabProps {
  item: TabItem;
  index: number;
  isActive: boolean;
  indicateActive: boolean;
  onClick(index: number): void;
  className: string;
  'data-hook': string;
}

export const Tab = React.forwardRef<HTMLLIElement, TabProps>((props, ref) => {
  const { index, item, onClick, isActive, indicateActive } = props;
  const title = item.title;
  const onSelectTab = () => {
    onClick(index);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    const keyCode = e.keyCode;

    if (isSelectKey(keyCode)) {
      onSelectTab();
      e.preventDefault();
      return false;
    }
  };
  const dataAttributes = {
    [TABS_DATA_KEYS.tabIndex]: index,
    [TABS_DATA_KEYS.tabIsActive]: isActive,
  };

  return (
    <li
      ref={ref}
      {...style('root', { isActive, indicateActive }, props)}
      {...dataAttributes}
      data-hook={props['data-hook']}
      key={`${title}-${index}`}
      onClick={onSelectTab}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-current={isActive}
    >
      <span role="link">{title}</span>
      <div className={style.focusIndicatorWrapper} tabIndex={-1}>
        <div className={style.focusIndicator} tabIndex={-1} />
      </div>
    </li>
  );
});
