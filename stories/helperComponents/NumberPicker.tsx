import * as React from 'react';
import * as UI from 'wix-base-ui/dist/base-ui';
import * as styles from './NumberPicker.scss';
import * as NumberChangeEvent from '../../mocks/fakeTPANumberChange.json';

export interface IColorPalettePickerState {
  selectedNumber: any;
}

export interface INumberPickerProps {
  wixParams?: IWixNumberParam[];
}

export interface IWixNumberParam {
  label: string;
  wixParam: string;
  defaultNumber: number;
  unit: string;
}

export class NumberPicker extends React.PureComponent<INumberPickerProps, IColorPalettePickerState> {
  static defaultProps = {
    wixParams: []
  };

  constructor(props) {
    super(props);
    const {wixParams} = props;
    this.state = {
      selectedNumber: this.getInitialSelectedNumber(wixParams),
    };
  }

  private getInitialSelectedNumber(wixParams: IWixNumberParam[] = []) {
    return wixParams.reduce((obj, item) => {
      obj[item.wixParam] = item.defaultNumber;
      return obj;
    }, {});
  }

  private onNumberChange(selectedNumber, wixParam) {
    this.setState({
      selectedNumber: {...this.state.selectedNumber, ...{[wixParam]: selectedNumber}}
    }, () => this.triggerNumberChanged());
  }

  private triggerNumberChanged() {
    NumberChangeEvent.params.style.numbers = this.props.wixParams.reduce((obj, item) => {
      obj[item.wixParam] = this.state.selectedNumber[item.wixParam];
      return obj;
    }, {});

    window.postMessage(JSON.stringify(NumberChangeEvent), '*');

  }

  render() {
    return (
      <div className={styles.numberPickerContainer}>
        <ul className={styles.numberPickerList}>
        {
          this.props.wixParams.map(({label, wixParam, unit}) =>
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
      </div>
    );
  }
}
