import * as React from 'react';
import { AllPropsRequired } from '../ts-helper';
import ChevronLeft from 'wix-ui-icons-common/ChevronLeft';
import ChevronRight from 'wix-ui-icons-common/ChevronRight';
import * as classNames from 'classnames';
import styles from './Selector.st.css';
import { CalendarContext, CalendarContextStructure } from '../Calendar';
import { Text as TextTPA, TYPOGRAPHY } from '../../Text';

// Working-around missing props in typings
const Text = TextTPA as any;

export interface SelectorProps {
  style?: React.CSSProperties;
  className?: string;
  ariaLabelPrev?: string;
  ariaLabelNext?: string;
  onClickPrev?(): void;
  onClickNext?(): void;
}

interface DefaultSelectorProps extends AllPropsRequired<SelectorProps> {}

export const CALENDAR_SELECTOR_DISPLAY_NAME = 'Calendar.Selector';

export class Selector extends React.PureComponent<SelectorProps> {
  static displayName = CALENDAR_SELECTOR_DISPLAY_NAME;

  static defaultProps: DefaultSelectorProps = {
    style: {},
    className: '',
    ariaLabelPrev: null,
    ariaLabelNext: null,
    onClickPrev: null,
    onClickNext: null,
  };

  renderComponent = (context: CalendarContextStructure) => {
    const {
      style,
      className,
      ariaLabelPrev,
      ariaLabelNext,
      onClickPrev,
      onClickNext,
      children,
    } = this.props;

    const { classNames: calendarClasses } = context;
    const { selectorTitle } = context.props;

    return (
      <div
        style={style}
        className={classNames(
          className,
          styles.selector,
          calendarClasses.selector,
        )}
      >
        <button
          onClick={onClickPrev}
          type="button"
          className={styles.button}
          data-hook="calendar-previous-button"
          aria-label={ariaLabelPrev}
        >
          <ChevronLeft size="1.5em" />
        </button>
        <div className={styles.period} data-hook="calendar-selector-title">
          {children || (
            <Text
              className={calendarClasses.periodText}
              // typography={TYPOGRAPHY.smallTitle}
              typography={TYPOGRAPHY.largeTitle}
            >
              {selectorTitle}
            </Text>
          )}
        </div>
        <button
          onClick={onClickNext}
          type="button"
          className={styles.button}
          data-hook="calendar-next-button"
          aria-label={ariaLabelNext}
        >
          <ChevronRight size="1.5em" />
        </button>
      </div>
    );
  };

  render() {
    return (
      <CalendarContext.Consumer>
        {context => this.renderComponent(context)}
      </CalendarContext.Consumer>
    );
  }
}
