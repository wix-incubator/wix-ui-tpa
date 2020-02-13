import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Dropdown } from '..';
import { Button } from '../../Button';

const kind = 'Tests';
const defaultOptions = [
  { id: '1', value: 'value 1' },
  { id: '2', value: 'value 2' },
  { id: '3', value: 'value 3' },
  { id: '4', value: 'value 4' },
  { id: '5', value: 'value 5' },
  { id: '6', value: 'value 6' },
  { id: '7', value: 'value 7' },
  { id: '8', value: 'value 8' },
  { id: '9', value: 'value 9' },
  { id: '10', value: 'value 10' },
];

class DropdownTestStory extends React.Component {
  state = {
    options: defaultOptions,
  };

  _onButtonClick = () => {
    this.setState({
      options: this.state.options.map(option => ({
        id: option.id,
        value: `Option ${option.id}`,
      })),
    });
  };

  render() {
    const { options } = this.state;

    return (
      <div style={{ margin: '10px', maxWidth: 200 }}>
        <Dropdown
          data-hook={'storybook-e2e-Dropdown'}
          options={options}
          initialSelectedId={'1'}
        />
        <Button
          onClick={this._onButtonClick}
          data-hook={'storybook-e2e-Button'}
        >
          Change options
        </Button>
      </div>
    );
  }
}

function renderTest() {
  return <DropdownTestStory />;
}

storiesOf(kind, module).add('Dropdown', renderTest);
