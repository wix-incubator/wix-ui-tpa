import * as React from 'react';

interface DefaultTitleProps {}
export interface TitleProps extends Partial<DefaultTitleProps> {}

export const CALENDAR_TITLE_DISPLAY_NAME = 'Calendar.Title';

export class Title extends React.PureComponent<TitleProps> {
  static displayName = CALENDAR_TITLE_DISPLAY_NAME;
  static defaultProps: DefaultTitleProps = {};

  render() {
    return this.props.children ? <div>{this.props.children}</div> : null;
  }
}
