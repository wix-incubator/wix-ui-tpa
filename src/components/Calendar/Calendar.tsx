import * as React from 'react';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { Title, CALENDAR_TITLE_DISPLAY_NAME } from './Title/Title';
import { AllPropsRequired } from './ts-helper';
import { Selector, CALENDAR_SELECTOR_DISPLAY_NAME } from './Selector/Selector';
import { CustomizableComponent } from './CustomizableComponent';
import { CALENDAR_GRID_DISPLAY_NAME, Grid } from './Grid/Grid';
import {
  TodayButton,
  CALENDAR_TODAY_BUTTON_DISPLAY_NAME,
} from './TodayButton/TodayButton';
import styles from './Calendar.st.css';
import * as classNames from 'classnames';
import { PRIORITY, SIZE } from '../Button';

export enum CalendarLayouts {
  weekly = 'weekly',
  monthly = 'monthly',
}

export const CALENDAR_CONTROLS_DISPLAY_NAME = 'Calendar.Controls';

export interface CalendarProps extends Partial<DefaultCalendarProps> {
  /**
   * Calendar layout.<br /><br />
   * Even though default is CalendarLayouts.monthly, currently only CalendarLayouts.weekly is supported.
   */
  layout?: CalendarLayouts;

  /**
   * Title for the whole calendar. <br /><br />
   * If no title is provided, title will not occupy empty space. <br /><br />
   * If custom <Calendar.Title> is used without children - this property will replace them. It allows using <Calendar.Title> simply as a placeholder to define custom component's position.<br /><br />
   * If <Calendar.Title> is used and it has children provided - this property will be completely ignored.
   */
  calendarTitle?: string;

  /**
   * Title for describing current calendar time interval such as current month or week.<br /><br />
   * If custom <Calendar.Selector> is used without children - this property will replace them wrapped into <Text>. It allows using <Calendar.Selector> simply as a placeholder to define custom component's position.<br /><br />
   * If <Calendar.Selector> is used and it has children provided - this property will be completely ignored.
   */
  selectorTitle?: string;

  /**
   * Hides time frame selector when true.
   */
  hideSelector?: boolean;

  /**
   * Hides today button when true.
   */
  hideTodayButton?: boolean;

  /**
   * Callback for handling previous time frame selection. <br /><br />
   * This property is completely ignored if <Calendar.Selector> component is used with same property.
   */
  onClickPrev?(): void;

  /**
   * Callback for handling next time frame selection.
   * This property is completely ignored if <Calendar.Selector> component is used with same property.
   */
  onClickNext?(): void;

  /**
   * Callback for handling current (today) time frame selection.
   * This property is completely ignored if <Calendar.TodayButton> component is used with onClick property.
   */
  onClickToday?(): void;

  /**
   * Aria label for previous time frame selection button.<br /><br />
   * If custom <Calendar.Selector> has its own ariaLabelPrev property defined - this property is completely ignored.
   */
  ariaLabelPrev?: string;

  /**
   * Aria label for next time frame selection button.<br /><br />
   * If custom <Calendar.Selector> has its own ariaLabelNext property defined - this property is completely ignored.
   */
  ariaLabelNext?: string;

  /**
   * Text to be shown on "today" button. <br /><br />
   * This property is completely ignored if <Calendar.TodayButton> is used with children.
   */
  todayButtonText?: string;

  /**
   * Priority style of "today" button. This is same as "priority" of <Button />.<br /><br />
   * This property is completely ignored if <Calendar.TodayButton> with custom priority is used.
   */
  todayButtonPriority?: PRIORITY;

  /**
   * Size style of "today" button. This is same as "size" of <Button />.<br /><br />
   * This property is completely ignored if <Calendar.TodayButton> with custom size is used.
   */
  todayButtonSize?: SIZE;

  /**
   * Inline styles.
   */
  style?: React.CSSProperties;

  /**
   * Class name.
   */
  className?: string;

  /**
   * Data hook
   */
  'data-hook'?: string;
}

type DefaultCalendarProps = AllPropsRequired<CalendarProps>;

export interface CalendarContextStructure {
  props: CalendarProps;
  isMobile: boolean;
}

const defaultContext: CalendarContextStructure = {
  props: {},
  isMobile: false,
};

export const CalendarContext = React.createContext<CalendarContextStructure>(
  defaultContext,
);

/** Component for showing some events of a particular week */
export class Calendar extends CustomizableComponent<CalendarProps> {
  static displayName = 'Calendar';

  static defaultProps: DefaultCalendarProps = {
    layout: CalendarLayouts.monthly,
    calendarTitle: '',
    selectorTitle: '',
    hideSelector: false,
    hideTodayButton: false,
    onClickPrev: null,
    onClickNext: null,
    onClickToday: null,
    ariaLabelPrev: null,
    ariaLabelNext: null,
    todayButtonText: '',
    todayButtonPriority: PRIORITY.secondary,
    todayButtonSize: SIZE.tiny,
    style: {},
    className: '',
    'data-hook': '',
  };

  static Title = Title;
  static Selector = Selector;
  static TodayButton = TodayButton;
  static Grid = Grid;

  useControlsWrapper = (customizedTypes: string[]) => {
    const { hideSelector, hideTodayButton } = this.props;

    const notCustomizedTypes = [
      CALENDAR_SELECTOR_DISPLAY_NAME,
      CALENDAR_TODAY_BUTTON_DISPLAY_NAME,
    ];

    if (customizedTypes.find(type => notCustomizedTypes.includes(type))) {
      return false;
    }

    if (hideSelector || hideTodayButton) {
      return false;
    }

    return true;
  };

  renderTitle = () => (
    <Calendar.Title className={styles.defaultTitle}>
      {this.props.calendarTitle}
    </Calendar.Title>
  );

  renderControls = (customizedTypes: string[]) =>
    this.useControlsWrapper(customizedTypes) ? (
      <div className={styles.defaultControls}>
        {this.renderSelector(customizedTypes, true)}
        <div className={styles.defaultTodayButtonPos}>
          {this.renderTodayButton(customizedTypes, true)}
        </div>
      </div>
    ) : null;

  renderSelector = (customizedTypes: string[], forceShow = false) =>
    forceShow || !this.useControlsWrapper(customizedTypes) ? (
      <Calendar.Selector
        className={styles.defaultSelector}
        onClickNext={this.props.onClickNext}
        onClickPrev={this.props.onClickPrev}
      />
    ) : null;

  renderTodayButton = (customizedTypes: string[], forceShow = false) =>
    forceShow || !this.useControlsWrapper(customizedTypes) ? (
      <Calendar.TodayButton />
    ) : null;

  renderGrid = () => <Calendar.Grid />;

  // TODO: if there is both today and selector, detailsElements
  // should be modified by replacing them with controls.
  // *Only if nothing is hidden

  defaultElements = {
    [CALENDAR_TITLE_DISPLAY_NAME]: this.renderTitle,
    [CALENDAR_CONTROLS_DISPLAY_NAME]: this.renderControls,
    [CALENDAR_SELECTOR_DISPLAY_NAME]: this.renderSelector,
    [CALENDAR_TODAY_BUTTON_DISPLAY_NAME]: this.renderTodayButton,
    [CALENDAR_GRID_DISPLAY_NAME]: this.renderGrid,
  };

  render() {
    const { 'data-hook': dataHook, style, className } = this.props;

    if (this.props.layout !== CalendarLayouts.weekly) {
      return <div>Monthly Calendar layout is not yet implemented</div>;
    }

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div
            data-hook={dataHook}
            style={style}
            className={classNames(className, styles.root)}
          >
            <CalendarContext.Provider
              value={{ ...defaultContext, props: this.props, isMobile: mobile }}
            >
              {this.getResolvedChildren()}
            </CalendarContext.Provider>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
