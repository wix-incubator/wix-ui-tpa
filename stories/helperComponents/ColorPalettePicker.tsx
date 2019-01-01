import * as React from 'react';
import * as UI from 'wix-base-ui/dist/base-ui';
import * as styles from './ColorPalettePicker.scss';
import * as ThemeChangeEvent from '../../mocks/fakeTPAThemeChange.json';

export interface IColorPalettePickerState {
  selectedPalette: string[][];
  selectedColors: {
    [id: string]: {
      value: string;
      index: number;
    }
  };
}

export interface IColorPalettePickerProps {
  wixParams?: IWixParam[];
}

export interface IWixParam {
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

export class ColorPalettePicker extends React.PureComponent<IColorPalettePickerProps, IColorPalettePickerState> {
  static defaultProps = {
    wixParams: []
  };

  constructor(props) {
    super(props);
    const {wixParams} = props;
    this.state = {
      selectedPalette: COLOR_PALETTE,
      selectedColors: this.getInitialSelectedColors(wixParams)
    };
  }

  onPaletteChange(selectedPalette) {
    const selectedColors = this.props.wixParams.reduce((obj, param) => {
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
    }, () => this.triggerThemeChange());
  }

  onColorChanged(selectedColor, wixParam) {
    this.setState({
      selectedColors: {...this.state.selectedColors, ...{[wixParam]: selectedColor}}
    }, () => this.triggerThemeChange());
  }

  private triggerThemeChange() {
    ThemeChangeEvent.params.style.colors = this.props.wixParams.reduce((obj, item) => {
      const color = this.state.selectedColors[item.wixParam];
      obj[item.wixParam] = {
        themeName: `color_${this.toTPAIndex(color.index)}`,
        value: this.state.selectedColors[item.wixParam].value
      };
      return obj;
    }, {});

    for (let i = 5; i < ThemeChangeEvent.params.siteColors.length; i++) {
      let {row, col} = this.getPaletteIndicesFromTPAIdx(i - 5);
      ThemeChangeEvent.params.siteColors[i].value = this.state.selectedPalette[col][row];
    }
    window.postMessage(JSON.stringify(ThemeChangeEvent), '*');
  }

  private toTPAIndex(index) {
    const {row, col} = this.getPaletteIndicesFromTPAIdx(index);
    return row * 5 + col + 1;
  }

  private getInitialSelectedColors(wixParams: IWixParam[] = []) {
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

  private getPaletteIndicesFromTPAIdx(TPAIdx: number): { row: number, col: number } {
    return {
      col: (TPAIdx - TPAIdx % 5) / 5,
      row: TPAIdx % 5
    };
  }

  render() {
    return <div className={styles.colorPalettePicker}>
      <ul className={styles.colorPickerList}>
        {
          this.props.wixParams.map(({label, wixParam}) =>
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
    </div>;
  }
}
