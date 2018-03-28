import * as React from 'react';
import {Input} from '../../src/components/Input';

export class InputExample extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      valid: true
    };
  }

  render() {
    const labelId = `${Math.random()}`;
    return <div>
      <Input data-hook="storybook-Input" placeholder={'a placeholder'}
             required={true}
             valid={this.state.valid}/>
      <input id={labelId} type="checkbox" style={{margin: '0 5px 0 16px'}}
             onClick={() => this.setState({valid: !this.state.valid})}/>
      <label htmlFor={labelId}>Set Invalid</label>
    </div>;
  }
}
