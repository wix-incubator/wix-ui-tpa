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

export const errorExample = buildExample(`
    <DatePicker
        value={value}
        onChange={this._onChange}
        hasError
        errorMessage="Error Message"
    />
`);

export const dateFormatExample = `
      <>
             <div style={{ marginBottom: '12px' }}>
                  <DatePicker
                    value={new Date()}
                    onChange={() => {}}
                    dateFormat="LL/dd/yyyy"
                  />
             </div>
             <div style={{ marginBottom: '12px' }}>
                  <DatePicker
                    value={new Date()}
                    onChange={() => {}}
                    dateFormat="dd/LL/yy"
                  />
            </div>
                    <div style={{ marginBottom: '12px' }}>
                  <DatePicker
                    value={new Date()}
                    onChange={() => {}}
                    dateFormat="LLL dd, yyyy"
                  />
            </div>
            <DatePicker
              value={new Date()}
              onChange={() => {}}
              dateFormat={date => date.getDate()}
            />
      </>
`;
