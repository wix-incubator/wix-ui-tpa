import * as React from 'react';
import { isSelectKey } from '../../../common/keyCodes';
import { st, classes } from './Tab.st.css';
import { TABS_DATA_KEYS } from '../dataHooks';
import { TPAComponentProps } from '../../../types';

export interface TabItem {
  /** Title of the tab */
  title?: string;
}

interface TabProps extends TPAComponentProps {
  item: TabItem;
  index: number;
  isActive: boolean;
  indicateActive: boolean;
  onClick(index: number): void;
}

export const Tab = React.forwardRef<HTMLLIElement, TabProps>((props, ref) => {
  const { index, item, onClick, isActive, indicateActive, className } = props;
  const title = item.title;
  const onSelectTab = () => {
    onClick(index);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (isSelectKey(e)) {
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
      className={st(classes.root, { isActive, indicateActive }, className)}
      {...dataAttributes}
      data-hook={props['data-hook']}
      key={`${title}-${index}`}
      onClick={onSelectTab}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-current={isActive}
    >
      <span role="link">{title}</span>
      <div className={classes.focusIndicatorWrapper} tabIndex={-1}>
        <div className={classes.focusIndicator} tabIndex={-1} />
      </div>
    </li>
  );
});
