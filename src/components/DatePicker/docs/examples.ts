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
    <div style={{ width: '280px' }}>
          <DatePicker
              value={value}
              placeholderText="Select A Date"
              onChange={this._onChange} 
          />
    </div>
`,
);

export const responsiveExample = buildExample(
  'new Date()',
  `
    <div style={{ width: '600px' }}>
          <DatePicker
              value={value}
              placeholderText="Select A Date"
              onChange={this._onChange} 
          />
    </div>
`,
);

export const filterExample = buildExample(
  'new Date()',
  `
    <div style={{ width: '280px' }}>
          <DatePicker
              value={value}
              onChange={this._onChange}
              filterDate={date => date < new Date()}
          />
    </div>
`,
);

export const yearsAndMonthDropdowns = buildExample(
  'new Date()',
  `
    <div style={{ width: '280px' }}>
          <DatePicker
              value={value}
              placeholderText="Select A Date"
              showMonthDropdown
              showYearDropdown
              onChange={this._onChange} 
          />
    </div>
`,
);

export const dateIndication = buildExample(
  'new Date()',
  `
    <div style={{ width: '280px' }}>
          <DatePicker
              value={value}
              placeholderText="Select A Date"
              onChange={this._onChange}
              dateIndication={({ date, isSelected }) => (
                  date <= new Date() && !isSelected ? (
                      <div className="Indications" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                           <div className="indication" style={{ borderRadius: '50%', width: '3px', height: '3px', backgroundColor: '#ED24D9' }}/>
                      </div>
                    ) : null)
                }
          />
    </div>
`,
);
