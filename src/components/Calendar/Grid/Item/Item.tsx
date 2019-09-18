import * as React from 'react';
import { AllPropsRequired } from '../../ts-helper';

export interface ItemProps {}
interface DefaultItemProps extends AllPropsRequired<ItemProps> {}

export const CALENDAR_ITEM_DISPLAY_NAME = 'Calendar.Item';

export class Item extends React.Component<ItemProps> {
  static displayName = CALENDAR_ITEM_DISPLAY_NAME;
  static defaultProps: DefaultItemProps = {};

  render = () => {
    return null;
  };
}
