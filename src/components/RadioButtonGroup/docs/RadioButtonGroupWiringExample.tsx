import * as React from 'react';
import { RadioButtonGroup } from '../';
import { RadioButton } from '../../RadioButton';
import { RadioButtonTheme } from '../../RadioButton/RadioButton';
import { RadioButtonGroupLayout } from '../RadioButtonGroup';
import { classes } from './RadioButtonGroupWiringExample.st.css';

export class RadioButtonGroupWiringExample extends React.Component {
  state = {
    firstGroup: 'optionoption',
    boxGroup: 'optionoption',
    boxNoSpace: 'optionoption',
  };

  render() {
    return (
      <div className={classes.root}>
        Horizontal Layout
        <div className={classes.component}>
          <RadioButtonGroup
            onChange={(val) => {
              console.log('val', val);
              this.setState({ firstGroup: val });
            }}
            layout={RadioButtonGroupLayout.Horizontal}
            theme={RadioButtonTheme.Box}
            name="areAreRadio"
            value={this.state.firstGroup}
          >
            <RadioButton label={'option'} value={'option'} />
            <RadioButton
              suffix="$100"
              label={'option1'}
              value={'optionoption'}
            />
            <RadioButton label={'option3'} value={'optionoptionoption'} />
          </RadioButtonGroup>
        </div>
        Disabled
        <div className={classes.component}>
          <RadioButtonGroup
            onChange={() => {}}
            layout={RadioButtonGroupLayout.Horizontal}
            name="areAreRadio"
            disabled
          >
            <RadioButton label={'option'} value={'option'} />
            <RadioButton label={'option1'} value={'optionoption'} />
            <RadioButton label={'option3'} value={'optionoptionoption'} />
          </RadioButtonGroup>
        </div>
        Error
        <div className={classes.component}>
          <RadioButtonGroup
            onChange={() => {}}
            error
            withSpacing
            errorText={'Bad choice'}
            name="areAreRadio"
          >
            <RadioButton label={'option'} value={'option'} />
            <RadioButton label={'option1'} value={'optionoption'} />
            <RadioButton label={'option3'} value={'optionoptionoption'} />
          </RadioButtonGroup>
        </div>
        Box
        <div className={classes.component}>
          <RadioButtonGroup
            onChange={(val) => {
              this.setState({ boxGroup: val });
            }}
            withSpacing
            theme={RadioButtonTheme.Box}
            name="areAreRadio"
            value={this.state.boxGroup}
          >
            <RadioButton suffix="$10" label={'option'} value={'option'} />
            <RadioButton label={'option1'} value={'optionoption'} />
            <RadioButton label={'option3'} value={'optionoptionoption'} />
          </RadioButtonGroup>
        </div>
        Without Spacing
        <div className={classes.component}>
          <RadioButtonGroup
            onChange={(val) => {
              this.setState({ boxNoSpace: val });
            }}
            theme={RadioButtonTheme.Box}
            name="areAreRadio"
            value={this.state.boxNoSpace}
          >
            <RadioButton suffix="$10" label={'option'} value={'option'} />
            <RadioButton label={'option1'} value={'optionoption'} />
            <RadioButton label={'option3'} value={'optionoptionoption'} />
          </RadioButtonGroup>
        </div>
      </div>
    );
  }
}
