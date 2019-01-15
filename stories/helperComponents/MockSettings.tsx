import * as React from 'react';
import * as UI from 'wix-base-ui/dist/base-ui';
import * as styles from './MockSettings.scss';
import * as SettingsChangedEvent from '../../mocks/fakeTPAChange.json';

export interface IMockSettingsState {
  selectedNumber: any;
  selectedFont: any;
  selectedPalette: string[][];
  selectedColors: {
    [id: string]: {
      value: string;
      index: number;
    }
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
}

export interface IWixFontParam {
  label: string;
  wixParam: string;
  defaultFont: string;
}

export interface IWixColorParam {
  label: string;
  wixParam: string;
  defaultColor: string;
}

const COLOR_PALETTE = [
  ['#FFFFFF', '#F2F2F2', '#CFCFCF', '#A8A8A8', '#606060'],
  ['#A4E6F7', '#77D7EF', '#00B9E8', '#007B9A', '#003D4D'],
  ['#F0ADA0', '#E28371', '#D32300', '#8D1700', '#460B00'],
  ['#D3E9AA', '#B6D47E', '#89BF24', '#5B7F18', '#2D3F0C'],
  ['#FFEFAA', '#FFE77F', '#FFD000', '#A98A00', '#544500']
];

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
        characterSets: [
          'latin',
          'latin-ext',
          'cyrillic',
          'hebrew',
          'arabic'
        ],
        permissions: 'all',
        fallbacks: 'ｍｓ ｐゴシック,ms pgothic,돋움,dotum,helvetica',
        spriteIndex: 2,
        cssFontFamily: 'arial,"ｍｓ ｐゴシック","ms pgothic","돋움",dotum,helvetica,sans-serif'
      },
      {
        displayName: 'Avenir',
        fontFamily: 'avenir-lt-w01_85-heavy1475544',
        cdnName: '',
        genericFamily: 'sans-serif',
        provider: 'monotype',
        characterSets: [
          'latin'
        ],
        permissions: 'all',
        fallbacks: '',
        spriteIndex: 215,
        cssFontFamily: 'avenir-lt-w01_85-heavy1475544,sans-serif'
      },
      {
        displayName: 'Comic Sans MS',
        fontFamily: 'comic sans ms',
        cdnName: '',
        genericFamily: 'cursive',
        provider: 'system',
        characterSets: [
          'latin',
          'latin-ext',
          'cyrillic'
        ],
        permissions: 'all',
        fallbacks: 'comic-sans-w01-regular,comic-sans-w02-regular,comic-sans-w10-regular',
        spriteIndex: 20,
        cssFontFamily: '"comic sans ms",comic-sans-w01-regular,comic-sans-w02-regular,comic-sans-w10-regular,cursive'
      },
      {
        displayName: 'Courier New',
        fontFamily: 'courier new',
        cdnName: '',
        genericFamily: 'monospace',
        provider: 'system',
        characterSets: [
          'latin',
          'latin-ext',
          'cyrillic',
          'hebrew',
          'arabic'
        ],
        permissions: 'all',
        fallbacks: 'courier-ps-w01,courier-ps-w02,courier-ps-w10',
        spriteIndex: 7,
        cssFontFamily: '"courier new",courier-ps-w01,courier-ps-w02,courier-ps-w10,monospace'
      },
      {
        displayName: 'Helvetica',
        fontFamily: 'helvetica-w01-roman',
        cdnName: '',
        genericFamily: 'sans-serif',
        provider: 'monotype',
        characterSets: [
          'latin',
          'latin-ext',
          'cyrillic'
        ],
        permissions: 'all',
        fallbacks: 'helvetica-w02-roman,helvetica-lt-w10-roman',
        spriteIndex: 124,
        cssFontFamily: 'helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif'
      }
    ]
  }
];

export class MockSettings extends React.PureComponent<IMockSettingsProps, IMockSettingsState> {
  static defaultProps = {
    wixNumberParams: [],
    wixFontParams: [],
    wixColorParams: []
  };

  constructor(props: IMockSettingsProps) {
    super(props);
    const {wixColorParams, wixFontParams, wixNumberParams} = props;
    this.state = {
      selectedNumber: this.getInitialSelectedNumber(wixNumberParams),
      selectedFont: this.getInitialSelectedFont(wixFontParams),
      selectedPalette: COLOR_PALETTE,
      selectedColors: this.getInitialSelectedColors(wixColorParams)

    };
  }

  private getInitialSelectedColors(wixParams: IWixColorParam[] = []) {
    return wixParams.reduce((obj, item) => {
      let tpaIdx = parseInt(item.defaultColor.split('-')[1], 10) - 1;
      const {row, col} = this.getPaletteIndicesFromTPAIdx(tpaIdx);
      obj[item.wixParam] = {
        value: COLOR_PALETTE[col][row],
        index: row * 5 + col
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
        value: item.defaultFont
      };
      return obj;
    }, {});
  }

  private getPaletteIndicesFromTPAIdx(TPAIdx: number): { row: number, col: number } {
    return {
      col: (TPAIdx - TPAIdx % 5) / 5,
      row: TPAIdx % 5
    };
  }

  private onFontChange(selectedFont, wixParam) {
    this.setState({
      selectedFont: {...this.state.selectedFont, ...{[wixParam]: {value: selectedFont}}}
    }, () => this.triggerChanged());
  }

  private onNumberChange(selectedNumber, wixParam) {
    this.setState({
      selectedNumber: {...this.state.selectedNumber, ...{[wixParam]: selectedNumber}}
    }, () => this.triggerChanged());
  }

  onPaletteChange(selectedPalette) {
    const selectedColors = this.props.wixColorParams.reduce((obj, param) => {
      const colorIndex = this.state.selectedColors[param.wixParam].index;
      const {row, col} = this.getPaletteIndicesFromTPAIdx(this.toTPAIndex(colorIndex) - 1);
      obj[param.wixParam] = {
        value: selectedPalette[col][row],
        index: colorIndex
      };
      return obj;
    }, {});

    this.setState({
      selectedPalette,
      selectedColors
    }, () => this.triggerChanged());
  }

  onColorChanged(selectedColor, wixParam) {
    this.setState({
      selectedColors: {...this.state.selectedColors, ...{[wixParam]: selectedColor}}
    }, () => this.triggerChanged());
  }

  private triggerChanged() {
    SettingsChangedEvent.params.style.numbers = this.props.wixNumberParams.reduce((obj, item) => {
      obj[item.wixParam] = this.state.selectedNumber[item.wixParam];
      return obj;
    }, {});

    SettingsChangedEvent.params.style.fonts = this.props.wixFontParams.reduce((obj, item) => {
      const font = this.getFontByFontFamily(this.state.selectedFont[item.wixParam].value);
      obj[item.wixParam] = {
        cssFontFamily: font.cssFontFamily,
        family: font.fontFamily,
        fontParam: true,
        index: font.spriteIndex,
        size: 30,
        style: {bold: false, italic: false, underline: false},
        value: `font:normal normal normal 30px/1.4em ${font.cssFontFamily};`
      };
      return obj;
    }, {});

    SettingsChangedEvent.params.style.colors = this.props.wixColorParams.reduce((obj, item) => {
      const color = this.state.selectedColors[item.wixParam];
      obj[item.wixParam] = {
        themeName: `color_${this.toTPAIndex(color.index)}`,
        value: this.state.selectedColors[item.wixParam].value
      };
      return obj;
    }, {});

    for (let i = 5; i < SettingsChangedEvent.params.siteColors.length; i++) {
      let {row, col} = this.getPaletteIndicesFromTPAIdx(i - 5);
      SettingsChangedEvent.params.siteColors[i].value = this.state.selectedPalette[col][row];
    }
    window.postMessage(JSON.stringify(SettingsChangedEvent), '*');
  }

  private getFontByFontFamily(fontFamily): any {
    return DEFAULT_EXAMPLES.reduce((selectedFont, fontGroup) =>
      !selectedFont ? fontGroup.fonts.find((font) =>
        font.fontFamily === fontFamily) : selectedFont, undefined);
  }

  private getMissingFontName(font) {
    return font.displayName;
  }

  private toTPAIndex(index) {
    const {row, col} = this.getPaletteIndicesFromTPAIdx(index);
    return row * 5 + col + 1;
  }

  private renderColorPicker() {
    return ( <div className={styles.colorPalettePicker}>
      <ul className={styles.pickerList}>
        {
          this.props.wixColorParams.map(({label, wixParam}) =>
            <li key={wixParam}>
              <label>{label} - {this.state.selectedColors[wixParam].value}</label>
              <UI.ColorPickerPalette onChange={(value, index) => this.onColorChanged({value, index}, wixParam)}
                                     value={this.state.selectedColors[wixParam].value}
                                     palette={this.state.selectedPalette}/>
            </li>
          )
        }
      </ul>
      <div className={styles.palettePickerContainer}>
        <UI.ColorPickerPalettePicker value={this.state.selectedPalette}
                                     onChange={(palette) => this.onPaletteChange(palette)}/>
      </div>
    </div>);
  }

  private renderNumberPicker() {
    return (<div className={styles.numberPickerContainer}>
      <ul className={styles.pickerList}>
        {
          this.props.wixNumberParams.map(({label, wixParam, unit}) =>
            <li key={wixParam}>
              <label>{label} - {this.state.selectedNumber[wixParam]}{unit}</label>
              <UI.Slider
                min={1}
                max={100}
                hideNumericInput={true}
                value={this.state.selectedNumber[wixParam]}
                onChange={(value) => this.onNumberChange(value, wixParam)}/>
            </li>
          )
        }
      </ul>
    </div>);
  }

  private renderFontPicker() {
    return (<div className={styles.fontPickerContainer}>
      <ul className={styles.pickerList}>
        {
          this.props.wixFontParams.map(({label, wixParam}) =>
            <li key={wixParam}>
              <label>{label} - {this.state.selectedFont[wixParam].value}</label>
              <UI.FontFamilyPicker
                fonts={DEFAULT_EXAMPLES}
                value={this.state.selectedFont[wixParam].value}
                getMissingFontName={this.getMissingFontName}
                onChange={(selectedFont) => this.onFontChange(selectedFont, wixParam)}/>
            </li>
          )
        }
      </ul>
    </div>);
  }

  render() {
    return (
      <div>
        {!!this.props.wixColorParams.length && this.renderColorPicker()}
        {!!this.props.wixNumberParams.length && this.renderNumberPicker()}
        {!!this.props.wixFontParams.length && this.renderFontPicker()}
      </div>
    );
  }
}
