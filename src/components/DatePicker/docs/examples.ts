export const importExample = `import { DatePicker } from 'wix-ui-tpa/DatePicker';`;

const buildExample = (initialValue: Date | string, content: string) => `
class DatePickerExample extends React.Component {
  state = {
    value: ${initialValue},
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

export const basicExample = buildExample(
  'new Date()',
  `
    <DatePicker
        value={value}
        placeholderText="Select A Date"
        onChange={this._onChange} 
    />
`,
);

export const emptyExample = buildExample(
  '""',
  `
    <DatePicker
        value={value}
        placeholderText="Select A Date"
        onChange={this._onChange} 
    />
`,
);

export const filterExample = buildExample(
  'new Date()',
  `
    <DatePicker
        value={value}
        onChange={this._onChange}
        filterDate={date => date < new Date()}
    />
`,
);

export const disabledExample = buildExample(
  'new Date()',
  `
    <DatePicker
        value={value}
        onChange={this._onChange}
        disabled
    />
`,
);

export const errorExample = buildExample(
  'new Date("2020/09/20")',
  `
    <DatePicker
        value={value}
        placeholderText="Select A Date"
        onChange={this._onChange}
        hasError
        errorMessage="Error Message"
    />
`,
);

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

export const yearsAndMonthDropdowns = buildExample(
    'new Date()',
    `
    <DatePicker
        value={value}
        placeholderText="Select A Date"
        showMonthDropdown
        showYearDropdown
        onChange={this._onChange} 
    />
`,
);
