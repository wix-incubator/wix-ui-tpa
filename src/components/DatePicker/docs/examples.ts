export const importExample = `import { DatePicker } from 'wix-ui-tpa/DatePicker';`;

const buildExample = (content: string) => `
class DatePickerExample extends React.Component {
  state = {
    value: new Date(),
  };

  _onChange = (date) => this.setState({ value: date });

  render() {
    const { value } = this.state;
    
    return (
      ${content} 
    );
  }
}
`;

export const basicExample = buildExample(`
    <DatePicker
        value={value}
        onChange={this._onChange} 
    />
`);

export const filterExample = buildExample(`
    <DatePicker
        value={value}
        onChange={this._onChange}
        filterDate={date => date < new Date()}
    />
`);

export const disabledExample = buildExample(`
    <DatePicker
        value={value}
        onChange={this._onChange}
        disabled
    />
`);

export const dateFormatExample = `
      <>
            <DatePicker
              value={new Date()}
              onChange={() => {}}
              dateFormat="LL/dd/yyyy"
            />
            <DatePicker
              value={new Date()}
              onChange={() => {}}
              dateFormat="dd/LL/yy"
            />
            <DatePicker
              value={new Date()}
              onChange={() => {}}
              dateFormat={date => date.getDate()}
            />
      </>
`;
