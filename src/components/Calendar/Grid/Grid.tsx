import * as React from 'react';
import { AllPropsRequired } from '../ts-helper';
import { CalendarContextStructure, CalendarLayouts } from '../Calendar';
import { WeeklyGrid } from './Weekly/WeeklyGrid';
import { CustomizableComponent } from '../CustomizableComponent';
import { CALENDAR_WEEK_DAY_DISPLAY_NAME } from './WeekDay/WeekDay';
import { CALENDAR_ITEM_DISPLAY_NAME } from './Item/Item';
import { CALENDAR_POPUP_DISPLAY_NAME } from './Popup/popup';

export interface GridProps {
  hideWeekDayTitles?: boolean;
}
interface DefaultGridProps extends AllPropsRequired<GridProps> {}

export const CALENDAR_GRID_DISPLAY_NAME = 'Calendar.Grid';

export class Grid extends CustomizableComponent<GridProps> {
  static displayName = CALENDAR_GRID_DISPLAY_NAME;

  static defaultProps: DefaultGridProps = {
    hideWeekDayTitles: false,
  };

  supportedComponents: React.ReactNode[];

  loadSupportedComponents = () => {
    const supported = [
      CALENDAR_WEEK_DAY_DISPLAY_NAME,
      CALENDAR_ITEM_DISPLAY_NAME,
      CALENDAR_POPUP_DISPLAY_NAME,
    ];

    this.supportedComponents = React.Children.toArray(
      this.props.children,
    ).filter(node => this.isNodeOfType(node, supported));
  };

  getSubComponent = (type: string) =>
    this.supportedComponents.find(node =>
      this.isNodeOfType(node, type),
    ) as React.ReactElement<any, any>;

  getRender = (type: string) => {
    const component = this.getSubComponent(type);

    if (!component) {
      return;
    }

    const children = React.Children.toArray(component.props.children);

    if (children.length !== 1 || typeof children[0] !== 'function') {
      return;
    }

    return children[0];
  };

  getWeekDayRender = () => this.getRender(CALENDAR_WEEK_DAY_DISPLAY_NAME);
  getItemRender = () => this.getRender(CALENDAR_ITEM_DISPLAY_NAME);
  getPopup = () => this.getSubComponent(CALENDAR_POPUP_DISPLAY_NAME);

  renderWithContext = (context: CalendarContextStructure) => {
    const { hideWeekDayTitles: hideWeekDayTitleProp } = this.props;

    const {
      layout,
      hideWeekDayTitles: hideWeekDayTitlesGlobal,
    } = context.props;

    const hideWeekDayTitles = Object.is(hideWeekDayTitleProp, undefined)
      ? hideWeekDayTitlesGlobal
      : hideWeekDayTitleProp;

    this.loadSupportedComponents();

    if (layout === CalendarLayouts.weekly) {
      return (
        <WeeklyGrid
          renderWeekDay={this.getWeekDayRender()}
          renderItem={this.getItemRender()}
          popup={this.getPopup()}
          hideWeekDayTitles={hideWeekDayTitles}
        />
      );
    }

    return null;
  };
}
