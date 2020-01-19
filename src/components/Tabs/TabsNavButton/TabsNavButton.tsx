import * as React from 'react';
import style from './TabsNavButton.st.css';
import { isSelectKey } from '../../../common/keyCodes';
import { TPAComponentProps } from '../../../types';

interface TabsNavButtonProps extends TPAComponentProps {
  onClick(): void;
  tabIndex: number;
}

export class TabsNavButton extends React.Component<TabsNavButtonProps> {
  private _rootRef: HTMLDivElement;

  width() {
    return this._rootRef ? this._rootRef.offsetWidth : 0;
  }

  _onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { onClick } = this.props;
    const keyCode = e.keyCode;

    if (isSelectKey(keyCode)) {
      onClick();
      return false;
    }
  };

  _rootRefCallback = (el: HTMLDivElement) => {
    this._rootRef = el;
  };

  render() {
    const { onClick, children, tabIndex, className } = this.props;

    return (
      <div
        {...style('root', {}, { className })}
        onClick={onClick}
        onKeyDown={this._onKeyDown}
        tabIndex={tabIndex}
        data-hook={this.props['data-hook']}
        ref={this._rootRefCallback}
      >
        {children}
        <div className={style.border} />
      </div>
    );
  }
}
