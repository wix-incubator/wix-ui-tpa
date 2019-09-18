import * as React from 'react';
import { AllPropsRequired } from '../../ts-helper';

export interface PopupProps {}
interface DefaultPopupProps extends AllPropsRequired<PopupProps> {}

export const CALENDAR_POPUP_DISPLAY_NAME = 'Calendar.Popup';

export class Popup extends React.Component<PopupProps> {
  static displayName = CALENDAR_POPUP_DISPLAY_NAME;
  static defaultProps: DefaultPopupProps = {};

  render = () => {
    return null;
  };
}
