import * as React from 'react';
import { isSelectKey } from '../../../common/keyCodes';
import { st, classes } from './Tab.st.css';
import { TABS_DATA_KEYS } from '../dataHooks';
import { TPAComponentProps } from '../../../types';

export interface TabItem {
  /** Title id for a11y */
  id?: string;
  /** Title of the tab */
  title?: string;
  /** URL if tab is link */
  href?: string;
  /** Target for link */
  target?: string;
  /** Rel for link */
  rel?: string;
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
  const { title, href, target, rel } = item;
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

  const [isFocused, setIsFocused] = React.useState(false);


  return (
    <li
      ref={ref}
      className={st(classes.root, { isActive, indicateActive }, className)}
      {...dataAttributes}
      data-hook={props['data-hook']}
      key={`${title}-${index}`}
      id={item.id}
      onClick={onSelectTab}
      onKeyDown={onKeyDown}
      tabIndex={href ? -1 : 0}
      aria-current={isActive}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {href ? (
        <a href={href} target={target} rel={rel}>
          {title}
        </a>
      ) : (
        <span role="link">{title}</span>
      )}
      {isFocused && !isActive && (<div
        className={classes.focusIndicator}
        tabIndex={-1}
        aria-hidden="true"
      />)}
    </li>
  );
});
