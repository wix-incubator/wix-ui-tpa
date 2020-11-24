import * as React from 'react';
import { st, classes } from './DotNavigation.st.css';
import { RadioButton, RadioButtonKeyDownEvent } from 'wix-ui-core/radio-button';
import { DotNavigationDataKeys, DotNavigationDataHooks } from './dataHooks';
import classNames from 'classnames';

const isNaN = require('lodash/isNaN');
const isNumber = require('lodash/isNumber');

import { TPAComponentProps } from '../../types';
import { KEYS } from '../../common/keyCodes';

const MAX_SHORT_LIST_LENGTH = 5;
const NUM_OF_NAV_DOTS = 2;

const enum Size {
  Normal = 'normal',
  Small = 'small',
  Tiny = 'tiny',
}

const START_SIZES = [
  Size.Normal,
  Size.Normal,
  Size.Normal,
  Size.Small,
  Size.Tiny,
];

const MIDDLE_SIZES = [
  Size.Tiny,
  Size.Small,
  Size.Normal,
  Size.Small,
  Size.Tiny,
];

const END_SIZES = [
  Size.Tiny,
  Size.Small,
  Size.Normal,
  Size.Normal,
  Size.Normal,
];

export enum Animation {
  Back = 'back',
  BackNext = 'back-next',
  Forward = 'forward',
  ForwardNext = 'forward-next',
}

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export interface DotNavigationProps extends TPAComponentProps {
  currentIndex?: number;
  length?: number;
  onSelect?(index: number): any;
  showBorder?: boolean;
  theme?: Theme;
  'aria-label'?: string;
  noOpacityTransition?: boolean;
}

interface DotNavigationState {
  savedCurrentIndex: number;
  animation: null | string;
}

interface RadioProps {
  key?: number | string;
  checked: boolean;
  size: 'normal' | 'small' | 'tiny';
  fakeRadio?: boolean;
}

interface RadioButtonProps {
  key: number | string;
  checked?: boolean;
  size: 'normal' | 'small' | 'tiny';
  onChange: any;
  onKeyDown?: any;
  ariaLabel: null | string;
}

const _isNumber = (value: any) => isNumber(value) && !isNaN(value);

const getFiveFromStart = (start: number) => [
  start,
  start + 1,
  start + 2,
  start + 3,
  start + 4,
];

/**
 * A dot navigation component
 */
export class DotNavigation extends React.Component<
  DotNavigationProps,
  DotNavigationState
> {
  state: DotNavigationState = {
    savedCurrentIndex: 0,
    animation: null,
  };

  static displayName = 'DotNavigation';

  static defaultProps: DotNavigationProps = {
    currentIndex: 0,
    length: MAX_SHORT_LIST_LENGTH,
    onSelect(index: number) {},
    showBorder: false,
    theme: Theme.Dark,
    'aria-label': 'Dot Navigation',
  };

  static shouldAnimate = (
    currentIndex: number,
    savedCurrentIndex: number,
    length: number,
  ) =>
    (currentIndex > 2 && currentIndex < length - 3) ||
    (currentIndex === 2 && currentIndex < savedCurrentIndex) ||
    (currentIndex === length - 3 && currentIndex > savedCurrentIndex);

  static hasCurrentIndexChanged = (
    currentIndex: number,
    savedCurrentIndex: number,
    length: number,
  ) =>
    _isNumber(currentIndex) &&
    currentIndex >= 0 &&
    currentIndex < length &&
    currentIndex !== savedCurrentIndex;

  static getLongListAnimation = (
    nextProps: DotNavigationProps,
    prevState: DotNavigationState,
  ) => {
    const { currentIndex, length } = nextProps;
    const { savedCurrentIndex } = prevState;

    return DotNavigation.hasCurrentIndexChanged(
      currentIndex,
      savedCurrentIndex,
      length,
    )
      ? {
          ...prevState,
          savedCurrentIndex: currentIndex,
          ...(DotNavigation.shouldAnimate(
            currentIndex,
            savedCurrentIndex,
            length,
          ) && {
            animation:
              currentIndex < savedCurrentIndex
                ? prevState.animation === Animation.Back
                  ? Animation.BackNext
                  : Animation.Back
                : prevState.animation === Animation.Forward
                ? Animation.ForwardNext
                : Animation.Forward,
          }),
        }
      : null;
  };

  static getDerivedStateFromProps = (
    nextProps: DotNavigationProps,
    prevState: DotNavigationState,
  ) =>
    nextProps.length <= MAX_SHORT_LIST_LENGTH
      ? null
      : DotNavigation.getLongListAnimation(nextProps, prevState);

  getRadio = ({ checked, size, fakeRadio }: RadioProps) => (
    <div
      {...(fakeRadio && { tabIndex: -1, 'aria-hidden': true })}
      className={classNames(classes.radio)}
    >
      <div
        className={classNames(classes.dot, {
          [classes.small]: size === Size.Small,
          [classes.tiny]: size === Size.Tiny,
          [classes.bordered]: this.props.showBorder === true,
          [classes.light]: this.props.theme === Theme.Light,
          [classes.checked]: checked,
          [classes.noOpacityTransition]: this.props.noOpacityTransition,
        })}
        data-hook={fakeRadio ? undefined : DotNavigationDataHooks.Dot}
      />
    </div>
  );

  renderFakeRadio = () =>
    this.getRadio({ checked: false, size: Size.Tiny, fakeRadio: true });

  renderRadioButton = ({
    key,
    checked,
    size,
    onChange,
    onKeyDown,
    ariaLabel,
  }: RadioButtonProps) => (
    <RadioButton
      key={key}
      checked={checked}
      checkedIcon={this.getRadio({ checked, size })}
      uncheckedIcon={this.getRadio({ checked: false, size })}
      onChange={onChange}
      onKeyDown={onKeyDown}
      aria-label={ariaLabel}
      {...{ className: classes.extendedRadioButton }}
    />
  );

  callOnSelect = (index: number) => () => {
    this.props.onSelect(index);
  };

  startKeyDownHandler = (event: RadioButtonKeyDownEvent) =>
    (event.key === KEYS.ArrowLeft || event.key === KEYS.ArrowUp) &&
    event.nativeEvent.preventDefault();

  endKeyDownHandler = (event: RadioButtonKeyDownEvent) =>
    (event.key === KEYS.ArrowRight || event.key === KEYS.ArrowDown) &&
    event.nativeEvent.preventDefault();

  getKeyDownHandler = (value: number) =>
    value === 0
      ? this.startKeyDownHandler
      : value === this.props.length - 1
      ? this.endKeyDownHandler
      : undefined;

  renderList = (values: number[], sizes: Size[]) =>
    values.map((value, index) =>
      this.renderRadioButton({
        key: value,
        checked: value === this.props.currentIndex,
        size: sizes[index],
        onChange: this.callOnSelect(value),
        onKeyDown: this.getKeyDownHandler(value),
        ariaLabel: `${this.props['aria-label']} ${value}`,
      }),
    );

  renderStartList = () => this.renderList(getFiveFromStart(0), START_SIZES);

  renderEndList = () =>
    this.renderList(getFiveFromStart(this.props.length - 5), END_SIZES);

  renderMiddleList = () =>
    this.renderList(
      getFiveFromStart(this.props.currentIndex - 2),
      MIDDLE_SIZES,
    );

  renderLongVersion = () => (
    <div
      className={classNames(classes.radioGroup, {
        [classes.back]: this.state.animation === Animation.Back,
        [classes.forward]: this.state.animation === Animation.Forward,
        [classes.backNext]: this.state.animation === Animation.BackNext,
        [classes.forwardNext]: this.state.animation === Animation.ForwardNext,
      })}
    >
      {this.renderFakeRadio()}
      {!_isNumber(this.props.currentIndex) ||
      this.props.currentIndex < MAX_SHORT_LIST_LENGTH - NUM_OF_NAV_DOTS
        ? this.renderStartList()
        : this.props.currentIndex >=
          this.props.length - (MAX_SHORT_LIST_LENGTH - NUM_OF_NAV_DOTS)
        ? this.renderEndList()
        : this.renderMiddleList()}
      {this.renderFakeRadio()}
    </div>
  );

  renderShortVersion = () => {
    let shortVersion = [];

    for (let index = 0; index < this.props.length; index++) {
      shortVersion = [
        ...shortVersion,
        this.renderRadioButton({
          key: index,
          checked: index === this.props.currentIndex,
          size: Size.Normal,
          onChange: this.callOnSelect(index),
          ariaLabel: `${this.props['aria-label']} ${index}`,
        }),
      ];
    }
    return shortVersion;
  };

  _getDataAttributes = () => ({
    [DotNavigationDataKeys.ShowBorder]: this.props.showBorder,
    [DotNavigationDataKeys.Theme]: this.props.theme,
    [DotNavigationDataKeys.SavedCurrentIndex]: this.state.savedCurrentIndex,
  });

  render = () => {
    const { length, className } = this.props;
    const short = length <= MAX_SHORT_LIST_LENGTH;

    return _isNumber(length) && length > 0 ? (
      <div
        className={st(classes.root, { short }, className)}
        data-hook={this.props['data-hook']}
        {...this._getDataAttributes()}
      >
        {length <= MAX_SHORT_LIST_LENGTH
          ? this.renderShortVersion()
          : this.renderLongVersion()}
      </div>
    ) : null;
  };
}
