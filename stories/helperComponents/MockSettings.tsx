import * as React from 'react';
import * as Color from 'color';
import {
  ColorPickerPalette,
  ColorPickerPalettePicker,
  Slider,
  FontFamilyPicker,
  OpacityPicker,
} from '@wix/wix-base-ui';
import styles from './MockSettings.scss';
import SettingsChangedEvent from '../../mocks/fakeTPAChange.json';
import { palettes } from './palettes';
import './baseUI.global.scss';

export interface IMockSettingsState {
  selectedNumber: any;
  selectedFont: any;
  selectedPalette: string[][];
  selectedColors: {
    [id: string]: {
      value: string;
      index: number;
      opacity: number;
    };
  };
}

export interface IMockSettingsProps {
  wixNumberParams?: IWixNumberParam[];
  wixFontParams?: IWixFontParam[];
  wixColorParams?: IWixColorParam[];
}

export interface IWixNumberParam {
  label: string;
  wixParam: string;
  defaultNumber: number;
  unit: string;
  min?: number;
  max?: number;
}

export interface IWixFontParam {
  label: string;
  wixParam: string;
  defaultFont: string;
  size?: number;
  fixedSize?: boolean;
}

export interface IWixColorParam {
  label: string;
  wixParam: string;
  defaultColor: string;
  fixedOpacity?: boolean;
}

const DEFAULT_FONT_SIZE = 14;

const DEFAULT_EXAMPLES = [
  {
    lang: 'latin',
    fonts: [
      {
        displayName: 'Arial',
        fontFamily: 'arial',
        cdnName: '',
        genericFamily: 'sans-serif',
        provider: 'system',
        characterSets: ['latin', 'latin-ext', 'cyrillic', 'hebrew', 'arabic'],
        permissions: 'all',
        fallbacks: 'ｍｓ ｐゴシック,ms pgothic,돋움,dotum,helvetica',
        spriteIndex: 2,
        cssFontFamily:
          'arial,"ｍｓ ｐゴシック","ms pgothic","돋움",dotum,helvetica,sans-serif',
      },
      {
        displayName: 'Avenir',
        fontFamily: 'avenir-lt-w01_85-heavy1475544',
        cdnName: '',
        genericFamily: 'sans-serif',
        provider: 'monotype',
        characterSets: ['latin'],
        permissions: 'all',
        fallbacks: '',
        spriteIndex: 215,
        cssFontFamily: 'avenir-lt-w01_85-heavy1475544,sans-serif',
      },
      {
        displayName: 'Comic Sans MS',
        fontFamily: 'comic sans ms',
        cdnName: '',
        genericFamily: 'cursive',
        provider: 'system',
        characterSets: ['latin', 'latin-ext', 'cyrillic'],
        permissions: 'all',
        fallbacks:
          'comic-sans-w01-regular,comic-sans-w02-regular,comic-sans-w10-regular',
        spriteIndex: 20,
        cssFontFamily:
          '"comic sans ms",comic-sans-w01-regular,comic-sans-w02-regular,comic-sans-w10-regular,cursive',
      },
      {
        displayName: 'Courier New',
        fontFamily: 'courier new',
        cdnName: '',
        genericFamily: 'monospace',
        provider: 'system',
        characterSets: ['latin', 'latin-ext', 'cyrillic', 'hebrew', 'arabic'],
        permissions: 'all',
        fallbacks: 'courier-ps-w01,courier-ps-w02,courier-ps-w10',
        spriteIndex: 7,
        cssFontFamily:
          '"courier new",courier-ps-w01,courier-ps-w02,courier-ps-w10,monospace',
      },
      {
        displayName: 'Helvetica',
        fontFamily: 'helvetica-w01-roman',
        cdnName: '',
        genericFamily: 'sans-serif',
        provider: 'monotype',
        characterSets: ['latin', 'latin-ext', 'cyrillic'],
        permissions: 'all',
        fallbacks: 'helvetica-w02-roman,helvetica-lt-w10-roman',
        spriteIndex: 124,
        cssFontFamily:
          'helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif',
      },
    ],
  },
];

export class MockSettings extends React.PureComponent<
  IMockSettingsProps,
  IMockSettingsState
> {
  static defaultProps = {
    wixNumberParams: [],
    wixFontParams: [],
    wixColorParams: [],
  };

  constructor(props: IMockSettingsProps) {
    super(props);
    const { wixColorParams, wixFontParams, wixNumberParams } = props;
    this.state = {
      selectedNumber: this.getInitialSelectedNumber(wixNumberParams),
      selectedFont: this.getInitialSelectedFont(wixFontParams),
      selectedPalette: palettes[0],
      selectedColors: this.getInitialSelectedColors(wixColorParams),
    };
  }

  private getInitialSelectedColors(wixParams: IWixColorParam[] = []) {
    return wixParams.reduce((obj, item) => {
      const tpaIdx = parseInt(item.defaultColor.split('-')[1], 10) - 1;
      const { row, col } = this.getPaletteIndicesFromTPAIdx(tpaIdx);
      obj[item.wixParam] = {
        value: palettes[0][col][row],
        index: row * 5 + col,
      };
      return obj;
    }, {});
  }

  private getInitialSelectedNumber(wixParams: IWixNumberParam[] = []) {
    return wixParams.reduce((obj, item) => {
      obj[item.wixParam] = item.defaultNumber;
      return obj;
    }, {});
  }

  private getInitialSelectedFont(wixParams: IWixFontParam[] = []) {
    return wixParams.reduce((obj, item) => {
      obj[item.wixParam] = {
        value: item.defaultFont,
        size: item.size || DEFAULT_FONT_SIZE,
      };
      return obj;
    }, {});
  }

  private getPaletteIndicesFromTPAIdx(
    TPAIdx: number,
  ): { row: number; col: number } {
    return {
      col: (TPAIdx - (TPAIdx % 5)) / 5,
      row: TPAIdx % 5,
    };
  }

  private onFontChange(selectedFont, wixParam) {
    this.setState(
      {
        selectedFont: {
          ...this.state.selectedFont,
          ...{
            [wixParam]: {
              ...this.state.selectedFont[wixParam],
              value: selectedFont,
            },
          },
        },
      },
      () => this.triggerChanged('font'),
    );
  }

  private onFontSizeChange(size, wixParam) {
    this.setState(
      {
        selectedFont: {
          ...this.state.selectedFont,
          ...{ [wixParam]: { ...this.state.selectedFont[wixParam], size } },
        },
      },
      () => this.triggerChanged('font'),
    );
  }

  private onNumberChange(selectedNumber, wixParam) {
    this.setState(
      {
        selectedNumber: {
          ...this.state.selectedNumber,
          ...{ [wixParam]: selectedNumber },
        },
      },
      () => this.triggerChanged('number'),
    );
  }

  onPaletteChange = (selectedPalette) => {
    const selectedColors = this.props.wixColorParams.reduce((obj, param) => {
      const colorIndex = this.state.selectedColors[param.wixParam].index;
      const { row, col } = this.getPaletteIndicesFromTPAIdx(
        this.toTPAIndex(colorIndex) - 1,
      );
      obj[param.wixParam] = {
        value: selectedPalette[col][row],
        index: colorIndex,
      };
      return obj;
    }, {});

    this.setState(
      {
        selectedPalette,
        selectedColors,
      },
      () => this.triggerChanged('palette'),
    );
  };

  onColorChanged(selectedColor, wixParam) {
    this.setState(
      {
        selectedColors: {
          ...this.state.selectedColors,
          ...{ [wixParam]: selectedColor },
        },
      },
      () => this.triggerChanged('color'),
    );
  }

  onOpacityChange(opacity, wixParam) {
    this.setState(
      {
        selectedColors: {
          ...this.state.selectedColors,
          ...{
            [wixParam]: { ...this.state.selectedColors[wixParam], opacity },
          },
        },
      },
      () => this.triggerChanged('color'),
    );
  }

  private triggerChanged(changed: 'color' | 'font' | 'number' | 'palette') {
    if (changed === 'number') {
      SettingsChangedEvent.params.style.numbers = this.props.wixNumberParams.reduce(
        (obj, item) => {
          obj[item.wixParam] = this.state.selectedNumber[item.wixParam];
          return obj;
        },
        {},
      );
    }

    if (changed === 'font') {
      SettingsChangedEvent.params.style.fonts = this.props.wixFontParams.reduce(
        (obj, item) => {
          const font = this.getFontByFontFamily(
            this.state.selectedFont[item.wixParam].value,
          );
          const size =
            this.state.selectedFont[item.wixParam].size ||
            item.size ||
            DEFAULT_FONT_SIZE;
          obj[item.wixParam] = {
            cssFontFamily: font.cssFontFamily,
            family: font.fontFamily,
            fontParam: true,
            index: font.spriteIndex,
            size,
            style: { bold: false, italic: false, underline: false },
            value: `font:normal normal normal ${size}px/1.4em ${font.cssFontFamily};`,
          };
          return obj;
        },
        {},
      );
    }

    if (changed === 'color' || changed === 'palette') {
      SettingsChangedEvent.params.style.colors = this.props.wixColorParams.reduce(
        (obj, item) => {
          const color = this.state.selectedColors[item.wixParam];
          const opacity = color.opacity;
          const hasOpacity = typeof opacity !== 'undefined' && opacity < 100;
          const themeName = hasOpacity
            ? item.wixParam
            : `color_${this.toTPAIndex(color.index)}`;
          const value = hasOpacity
            ? new Color(this.state.selectedColors[item.wixParam].value)
                .alpha(opacity / 100)
                .toString()
            : this.state.selectedColors[item.wixParam].value;

          obj[item.wixParam] = {
            themeName,
            value,
            rgba: value,
          };
          return obj;
        },
        {},
      );
    }

    if (changed === 'palette') {
      for (let i = 5; i < SettingsChangedEvent.params.siteColors.length; i++) {
        const { row, col } = this.getPaletteIndicesFromTPAIdx(i - 5);
        SettingsChangedEvent.params.siteColors[
          i
        ].value = this.state.selectedPalette[col][row];
      }
    }
    window.postMessage(JSON.stringify(SettingsChangedEvent), '*');
  }

  private getFontByFontFamily(fontFamily): any {
    return DEFAULT_EXAMPLES.reduce(
      (selectedFont, fontGroup) =>
        !selectedFont
          ? fontGroup.fonts.find((font) => font.fontFamily === fontFamily)
          : selectedFont,
      undefined,
    );
  }

  private getMissingFontName(font) {
    return font.displayName;
  }

  private toTPAIndex(index) {
    const { row, col } = this.getPaletteIndicesFromTPAIdx(index);
    return row * 5 + col + 1;
  }

  private renderColorPicker() {
    return (
      <div className={styles.styleItem}>
        <h2 className={styles.title}>
          <span>Colors</span>
        </h2>
        <div className={styles.colorPalettePicker}>
          <div className={styles.colorPickerContainer}>
            <ul className={styles.pickerList}>
              {this.props.wixColorParams.map(
                ({ label, wixParam, fixedOpacity }) => (
                  <li key={wixParam}>
                    <label>
                      {label} - {this.state.selectedColors[wixParam].value}
                    </label>
                    <ColorPickerPalette
                      onChange={(value, index) =>
                        this.onColorChanged({ value, index }, wixParam)
                      }
                      value={this.state.selectedColors[wixParam].value}
                      palette={this.state.selectedPalette}
                    />
                    {!fixedOpacity ? (
                      <OpacityPicker
                        value={this.state.selectedColors[wixParam].opacity}
                        onChange={(value) =>
                          this.onOpacityChange(value, wixParam)
                        }
                      />
                    ) : null}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className={styles.palettePickerContainer}>
            <div className={styles.palettePicker}>
              <label>Palette Picker</label>
              <ColorPickerPalettePicker
                palettePresets={palettes}
                value={this.state.selectedPalette}
                onChange={this.onPaletteChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private renderNumberPicker() {
    return (
      <div className={styles.styleItem}>
        <h2 className={styles.title}>
          <span>Numbers</span>
        </h2>
        <div className={styles.numberPickerContainer}>
          <ul className={styles.pickerList}>
            {this.props.wixNumberParams.map(
              ({ label, wixParam, unit, max = 100, min = 0 }) => (
                <li key={wixParam}>
                  <label>
                    {label} - {this.state.selectedNumber[wixParam]}
                    {unit}
                  </label>
                  <Slider
                    min={min}
                    max={max}
                    hideNumericInput
                    value={this.state.selectedNumber[wixParam]}
                    onChange={(value) => this.onNumberChange(value, wixParam)}
                  />
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    );
  }

  private renderFontPicker() {
    return (
      <div className={styles.styleItem}>
        <h2 className={styles.title}>
          <span>Fonts</span>
        </h2>
        <div className={styles.fontPickerContainer}>
          <ul className={styles.pickerList}>
            {this.props.wixFontParams.map(({ label, wixParam, fixedSize }) => (
              <li key={wixParam}>
                <label>{label}</label>
                <FontFamilyPicker
                  fonts={DEFAULT_EXAMPLES}
                  value={this.state.selectedFont[wixParam].value}
                  getMissingFontName={this.getMissingFontName}
                  onChange={(selectedFont) =>
                    this.onFontChange(selectedFont, wixParam)
                  }
                />
                {!fixedSize ? (
                  <Slider
                    value={this.state.selectedFont[wixParam].size}
                    unit="px"
                    min={12}
                    max={24}
                    onChange={(value) => this.onFontSizeChange(value, wixParam)}
                  />
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.root}>
        {!!this.props.wixColorParams.length && this.renderColorPicker()}
        {!!this.props.wixNumberParams.length && this.renderNumberPicker()}
        {!!this.props.wixFontParams.length && this.renderFontPicker()}
      </div>
    );
  }
}
