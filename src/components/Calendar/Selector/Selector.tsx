import * as React from 'react';
import { AllPropsRequired } from '../ts-helper';
import ChevronLeft from 'wix-ui-icons-common/ChevronLeft';
import ChevronRight from 'wix-ui-icons-common/ChevronRight';
import * as classNames from 'classnames';
import styles from './Selector.st.css';
import { CalendarContextStructure } from '../Calendar';
import { Text as TextTPA, TYPOGRAPHY } from '../../Text';
import { CalendarComponent } from '../CalendarComponent';

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

export class Selector extends CalendarComponent<SelectorProps> {
  static displayName = CALENDAR_SELECTOR_DISPLAY_NAME;

  static defaultProps: DefaultSelectorProps = {
    style: {},
    className: '',
    ariaLabelPrev: null,
    ariaLabelNext: null,
    onClickPrev: null,
    onClickNext: null,
  };

  renderWithContext = (context: CalendarContextStructure) => {
    const {
      style,
      className,
      ariaLabelPrev: ariaLabelPrevProp,
      ariaLabelNext: ariaLabelNextProp,
      onClickPrev: onClickPrevProp,
      onClickNext: onClickNextProp,
      children,
    } = this.props;

    const {
      selectorTitle,
      onClickPrev: onClickPrevGlobal,
      onClickNext: onClickNextGlobal,
      ariaLabelPrev: ariaLabelPrevGlobal,
      ariaLabelNext: ariaLabelNextGlobal,
      hideSelector,
    } = context.props;

    if (hideSelector) {
      return null;
    }

    const onClickPrev = onClickPrevProp || onClickPrevGlobal;
    const onClickNext = onClickNextProp || onClickNextGlobal;
    const ariaLabelPrev = ariaLabelPrevProp || ariaLabelPrevGlobal;
    const ariaLabelNext = ariaLabelNextProp || ariaLabelNextGlobal;

    return (
      <div
        style={style}
        className={classNames(className, context.styles.selector)}
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
              className={styles.periodText}
              typography={TYPOGRAPHY.smallTitle}
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
}
