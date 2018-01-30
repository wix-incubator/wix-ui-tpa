import * as React from 'react';
import * as UI from 'wix-base-ui/dist/base-ui';
import * as styles from './ColorPalettePicker.scss';
import * as ThemeChangeEvent from '../../mocks/fakeTPAThemeChange.json';

interface IColorPalettePickerState {
  selectedPalette: string[][];
  selectedColor: {
    value: string;
    index: number;
  };
}

interface IColorPalettePickerProps {
  wixParams?: Array<{ label: string, wixParam: string }>;
}

const COLOR_PALETTE = [
  ['#FFFFFF', '#F2F2F2', '#CFCFCF', '#A8A8A8', '#606060'],
  ['#A4E6F7', '#77D7EF', '#00B9E8', '#007B9A', '#003D4D'],
  ['#F0ADA0', '#E28371', '#D32300', '#8D1700', '#460B00'],
  ['#D3E9AA', '#B6D47E', '#89BF24', '#5B7F18', '#2D3F0C'],
  ['#FFEFAA', '#FFE77F', '#FFD000', '#A98A00', '#544500']
];

export class ColorPalettePicker extends React.PureComponent<IColorPalettePickerProps, IColorPalettePickerState> {
  constructor(props) {
    super(props);

    this.state = {
      selectedPalette: COLOR_PALETTE,
      selectedColor: {
        value: COLOR_PALETTE[4][2],
        index: 14
      }
    };
  }

  onPaletteChange(selectedPalette) {
    const colorIndex = this.state.selectedColor.index;
    this.setState({
      selectedPalette,
      selectedColor: {value: selectedPalette[colorIndex % 5][(colorIndex - colorIndex % 5) / 5], index: colorIndex}
    });

    this.triggerThemeChange(selectedPalette);
  }

  onColorChanged(selectedColor, wixParam) {
    this.setState({selectedColor}, () => this.triggerThemeChange(this.state.selectedPalette, this.state.selectedColor.value, wixParam));
  }

  private triggerThemeChange(selectedPalette: string[][], selectedColor?: string, wixParam?) {
    if (selectedColor) {
      ThemeChangeEvent.params.style.colors[wixParam] = {value: selectedColor};
    }
    for (let i = 5; i < ThemeChangeEvent.params.siteColors.length; i++) {
      ThemeChangeEvent.params.siteColors[i].value = selectedPalette[Math.floor((i - 5) / 5)][(i - 5) % 5];
    }
    window.postMessage(JSON.stringify(ThemeChangeEvent), '*');
  }

  render() {
    return <div className={styles.colorPalettePicker}>
      <div className={styles.colorPickerPaletteContainer}>
        {
          this.props.wixParams.map(({label, wixParam}) =>
            <div>
              <label>{label}</label>
              <UI.ColorPickerPalette onChange={(value, index) => this.onColorChanged({value, index}, wixParam)}
                                     value={this.state.selectedColor.value}
                                     palette={this.state.selectedPalette}/>
            </div>
          )
        }
      </div>
      <div className={styles.colorPickerPalettePickerContainer}>
        <UI.ColorPickerPalettePicker value={this.state.selectedPalette}
                                     onChange={(palette) => this.onPaletteChange(palette)}/>
      </div>
    </div>;
  }
}
