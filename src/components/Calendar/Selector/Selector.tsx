import * as React from 'react';
import { AllPropsRequired } from '../ts-helper';
import ChevronLeft from 'wix-ui-icons-common/ChevronLeft';
import ChevronRight from 'wix-ui-icons-common/ChevronRight';
import * as classNames from 'classnames';
import styles from './Selector.st.css';

export interface SelectorProps {
  style?: React.CSSProperties;
  className?: string;
  titleVisible: boolean;
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
    titleVisible: true,
    ariaLabelPrev: null,
    ariaLabelNext: null,
    onClickPrev: null,
    onClickNext: null,
  };

  render() {
    const {
      style,
      className,
      titleVisible,
      ariaLabelPrev,
      ariaLabelNext,
      onClickPrev,
      onClickNext,
      children,
    } = this.props;

    return (
      <div
        style={style}
        className={classNames(className, styles.monthControls)}
      >
        <button
          onClick={onClickPrev}
          type="button"
          className={styles.monthButton}
          data-hook="calendar-previous-button"
          aria-label={ariaLabelPrev}
        >
          <ChevronLeft size="1.5em" />
        </button>
        <div
          className={classNames(styles.month, {
            [styles.loading]: !titleVisible,
          })}
          data-hook="calendar-selector-title"
        >
          {children}
        </div>
        <button
          onClick={onClickNext}
          type="button"
          className={styles.monthButton}
          data-hook="calendar-next-button"
          aria-label={ariaLabelNext}
        >
          <ChevronRight size="1.5em" />
        </button>
      </div>
    );
  }
}
