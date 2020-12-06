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

export const yearsAndMonthDropdowns = buildExample(
  'new Date()',
  `
    <DatePicker
        value={value}
        showMonthDropdown
        showYearDropdown
        onChange={this._onChange} 
    />
`,
);

export const rtlExample = buildExample(
  'new Date()',
  `
    <ExampleWithContextProps rtl >
        <div dir="rtl">
            <DatePicker />
        </div>
    </ExampleWithContextProps>
`,
);
