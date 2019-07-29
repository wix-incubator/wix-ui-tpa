import * as React from 'react';
import styles from './DotNavigation.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { RadioButton } from 'wix-ui-core/radio-button';
import { DotNavigationDataKeys, DotNavigationDataHooks } from './dataHooks';

const MAX_SHORT_LIST_LENGTH = 5;

const enum Size {
  Normal = 'normal',
  Small = 'small',
  Tiny = 'tiny',
}

export enum Animation {
  Back = 'back',
  Forward = 'forward',
}

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export interface DotNavigationProps {
  currentIndex?: number;
  length?: number;
  onSelect?(index: number): any;
  showBorder?: boolean;
  theme?: Theme;
  ariaLabel?: string;
}

interface DotNavigationState {
  current: number;
  start: number;
  animation: null | string;
  longListKey: number;
}

interface RadioProps {
  checked: boolean;
  size: 'normal' | 'small' | 'tiny';
  hidden: boolean;
  dataHook: string;
}

interface RadioButtonProps {
  key: number | string;
  checked: boolean;
  size: 'normal' | 'small' | 'tiny';
  hidden: boolean;
  onChange: any;
  dataHook: string;
  ariaLabel: null | string;
}

const isNumber = (value: any) => typeof value === 'number' && !isNaN(value);

const moveNumberToInterval = (value: number, start: number, end: number) =>
  Math.max(start, Math.min(end, value));

export class DotNavigation extends React.Component<
  DotNavigationProps,
  DotNavigationState
> {
  static displayName = 'DotNavigation';

  static defaultProps: DotNavigationProps = {
    length: MAX_SHORT_LIST_LENGTH,
    onSelect(index: number) {},
    showBorder: false,
    theme: Theme.Dark,
    ariaLabel: 'DotNavigation',
  };

  static getAlmostCurrent = (current: number, length: number) => {
    if (current === length - 1 || current === length - 2) {
      return length - 3;
    }
    return current;
  };

  static moveStartIfInvisibleCurrent = (
    start: number,
    current: number,
    length: number,
  ) =>
    current < start || current > start + 2
      ? DotNavigation.getAlmostCurrent(current, length)
      : start;

  static getDerivedStateFromProps(
    props: DotNavigationProps,
    state: DotNavigationState,
  ) {
    if (!isNumber(props.length)) {
      return state;
    }

    const newCurrentRaw = isNumber(props.currentIndex)
      ? props.currentIndex
      : state.current;
    const newCurrent = moveNumberToInterval(newCurrentRaw, 0, props.length - 1);

    return {
      ...state,
      current: newCurrent,
      start: DotNavigation.moveStartIfInvisibleCurrent(
        state.start,
        newCurrent,
        props.length,
      ),
    };
  }

  state = {
    current: 0,
    start: 0,
    animation: null,
    longListKey: 0,
  };

  getUniqueLongListKey = () => {
    let newLongListKey = Math.random();

    while (newLongListKey === this.state.longListKey) {
      newLongListKey = Math.random();
    }
    return newLongListKey;
  };

  getRadio = ({ checked, size, hidden, dataHook }: RadioProps) => (
    <div
      {...styles('radio', {
        checked,
        hidden,
      })}
      data-hook={dataHook}
    >
      <div
        {...styles('dot', {
          small: size === Size.Small,
          tiny: size === Size.Tiny,
        })}
        data-hook={DotNavigationDataHooks.Dot}
      />
    </div>
  );

  renderRadioButton = ({
    key,
    checked,
    size,
    hidden,
    onChange,
    dataHook,
    ariaLabel,
  }: RadioButtonProps) => (
    <RadioButton
      key={key}
      checked={checked}
      checkedIcon={this.getRadio({
        checked,
        size,
        hidden,
        dataHook,
      })}
      uncheckedIcon={this.getRadio({
        checked: false,
        size,
        hidden,
        dataHook,
      })}
      onChange={onChange ? onChange : undefined}
      aria-label={ariaLabel}
    />
  );

  move = (current: number, start: number, animation: null | string) => {
    this.props.onSelect(current);
    this.setState({
      current,
      start,
      animation,
      longListKey: this.getUniqueLongListKey(),
    });
  };

  moveToStart = () => this.move(0, 0, Animation.Back);

  moveBack = () => {
    const { current, start } = this.state;
    const newCurrent = current - 1;
    const newStart = newCurrent < start ? start - 1 : start;
    const newAnimation = newCurrent < start ? Animation.Back : null;

    this.move(newCurrent, newStart, newAnimation);
  };

  moveForward = () => {
    const { current, start } = this.state;
    const newCurrent = current + 1;
    const newStart = newCurrent > start + 2 ? start + 1 : start;
    const newAnimation = newCurrent > start + 2 ? Animation.Forward : null;

    this.move(newCurrent, newStart, newAnimation);
  };

  moveToEnd = () =>
    this.move(this.props.length - 1, this.props.length - 3, Animation.Forward);

  select = (current: number) => () =>
    this.move(current, this.state.start, null);

  renderEmptyButton = (key: number | string) =>
    this.renderRadioButton({
      key,
      checked: false,
      size: Size.Normal,
      hidden: true,
      onChange: null,
      dataHook: null,
      ariaLabel: null,
    });

  renderAdditionalStartButton = () =>
    this.state.animation === Animation.Forward && this.state.start >= 3
      ? this.renderRadioButton({
          key: 0,
          checked: false,
          size: Size.Tiny,
          hidden: false,
          onChange: null,
          dataHook: null,
          ariaLabel: null,
        })
      : this.renderEmptyButton(0);

  renderStartButton = () =>
    this.state.start >= 2
      ? this.renderRadioButton({
          key: 1,
          checked: false,
          size: Size.Tiny,
          hidden: false,
          onChange: this.moveToStart,
          dataHook: DotNavigationDataHooks.StartButton,
          ariaLabel: `${this.props.ariaLabel} start`,
        })
      : this.renderEmptyButton(1);

  renderPreviousButton = () =>
    this.state.start >= 1
      ? this.renderRadioButton({
          key: 2,
          checked: false,
          size: Size.Small,
          hidden: false,
          onChange: this.moveBack,
          dataHook: DotNavigationDataHooks.PreviousButton,
          ariaLabel: `${this.props.ariaLabel} previous`,
        })
      : this.renderEmptyButton(2);

  renderMiddleButton = (index: number) => {
    const dotIndex = this.state.start + index;

    return this.renderRadioButton({
      key: index + 3,
      checked: this.state.current === dotIndex,
      size: Size.Normal,
      hidden: false,
      onChange: this.select(dotIndex),
      dataHook: null,
      ariaLabel: `${this.props.ariaLabel} ${dotIndex}`,
    });
  };

  renderNextButton = () =>
    this.state.start + 3 < this.props.length
      ? this.renderRadioButton({
          key: 6,
          checked: false,
          size: Size.Small,
          hidden: false,
          onChange: this.moveForward,
          dataHook: DotNavigationDataHooks.NextButton,
          ariaLabel: `${this.props.ariaLabel} next`,
        })
      : this.renderEmptyButton(6);

  renderEndButton = () =>
    this.state.start + 4 < this.props.length
      ? this.renderRadioButton({
          key: 7,
          checked: false,
          size: Size.Tiny,
          hidden: false,
          onChange: this.moveToEnd,
          dataHook: DotNavigationDataHooks.EndButton,
          ariaLabel: `${this.props.ariaLabel} end`,
        })
      : this.renderEmptyButton(7);

  renderAdditionalEndButton = () =>
    this.state.animation === Animation.Back &&
    this.state.start + 5 < this.props.length
      ? this.renderRadioButton({
          key: 8,
          checked: false,
          size: Size.Tiny,
          hidden: false,
          onChange: null,
          dataHook: null,
          ariaLabel: null,
        })
      : this.renderEmptyButton(8);

  renderLongList = () => (
    <div
      {...styles('radioGroup', {
        [Animation.Back]: this.state.animation === Animation.Back,
        [Animation.Forward]: this.state.animation === Animation.Forward,
      })}
      key={this.state.longListKey}
    >
      {...[
        this.renderAdditionalStartButton(),
        this.renderStartButton(),
        this.renderPreviousButton(),
        this.renderMiddleButton(0),
        this.renderMiddleButton(1),
        this.renderMiddleButton(2),
        this.renderNextButton(),
        this.renderEndButton(),
        this.renderAdditionalEndButton(),
      ]}
    </div>
  );

  renderShortListButton = (index: number) =>
    this.renderRadioButton({
      key: index,
      checked: index === this.state.current,
      size: Size.Normal,
      hidden: false,
      onChange: this.select(index),
      dataHook: null,
      ariaLabel: `${this.props.ariaLabel} ${index}`,
    });

  renderShortList = () =>
    new Array(this.props.length)
      .fill(null)
      .map((el, index) => this.renderShortListButton(index));

  _getDataAttributes = () => {
    const { showBorder, theme } = this.props;
    const { current, start, animation } = this.state;

    return {
      [DotNavigationDataKeys.ShowBorder]: showBorder,
      [DotNavigationDataKeys.Theme]: theme,
      [DotNavigationDataKeys.Current]: current,
      [DotNavigationDataKeys.Start]: start,
      [DotNavigationDataKeys.Animation]: animation,
    };
  };

  render = () => {
    const { length, showBorder, theme, ...rest } = this.props;

    if (!isNumber(length) || length <= 0) {
      return null;
    }

    return (
      <TPAComponentsConsumer>
        {() => (
          <div
            {...styles(
              'root',
              {
                bordered: showBorder === true,
                light: theme === Theme.Light,
              },
              rest,
            )}
            {...this._getDataAttributes()}
          >
            {length <= MAX_SHORT_LIST_LENGTH
              ? this.renderShortList()
              : this.renderLongList()}
          </div>
        )}
      </TPAComponentsConsumer>
    );
  };
}
