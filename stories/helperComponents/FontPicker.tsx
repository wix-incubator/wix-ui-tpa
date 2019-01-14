import * as React from 'react';
import * as UI from 'wix-base-ui/dist/base-ui';
import * as styles from './FontPicker.scss';
import * as FontChangeEvent from '../../mocks/fakeTPAFontChange.json';

export interface IColorPalettePickerState {
  selectedFont: any;
}

export interface IFontPickerProps {
  wixParams?: IWixFontParam[];
}

export interface IWixFontParam {
  label: string;
  wixParam: string;
  defaultFont: string;
}

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

export class FontPicker extends React.PureComponent<IFontPickerProps, IColorPalettePickerState> {
  static defaultProps = {
    wixParams: []
  };

  constructor(props) {
    super(props);
    const {wixParams} = props;
    this.state = {
      selectedFont: this.getInitialSelectedFont(wixParams),
    };
  }

  private getInitialSelectedFont(wixParams: IWixFontParam[] = []) {
    return wixParams.reduce((obj, item) => {
      obj[item.wixParam] = {
        value: item.defaultFont
      };
      return obj;
    }, {});
  }

  private onFontChange(selectedFont, wixParam) {
    this.setState({
      selectedFont: {...this.state.selectedFont, ...{[wixParam]: {value: selectedFont}}}
    }, () => this.triggerFontChanged());
  }

  private triggerFontChanged() {
    FontChangeEvent.params.style.fonts = this.props.wixParams.reduce((obj, item) => {
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

    window.postMessage(JSON.stringify(FontChangeEvent), '*');

  }

  private getFontByFontFamily(fontFamily): any {
    return DEFAULT_EXAMPLES.reduce((selectedFont, fontGroup) =>
      !selectedFont ? fontGroup.fonts.find((font) =>
        font.fontFamily === fontFamily) : selectedFont, undefined);
  }

  private getMissingFontName(font) {
    return font.displayName;
  }

  render() {
    return (
      <div className={styles.fontPickerContainer}>
        <ul className={styles.fontPickerList}>
          {
            this.props.wixParams.map(({label, wixParam}) =>
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
      </div>
    );
  }
}
