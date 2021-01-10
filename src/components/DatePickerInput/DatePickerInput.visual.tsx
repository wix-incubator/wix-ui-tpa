import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { DatePickerInput, DatePickerInputProps } from './';
import { datePickerInputDriverFactory } from './DatePickerInput.driver';

const createDriver = uniTestkitFactoryCreator(datePickerInputDriverFactory);
const dataHook = 'storybook-datePickerInput';

interface DatePickerInputVisualProps {
  datePickerInputProps: DatePickerInputProps;
  onDone(): void;
}

class DatePickerInputVisualComponent extends React.Component<DatePickerInputVisualProps> {
  static defaultProps = {
    datePickerInputProps: {},
    onDone: () => {},
  };

  async componentDidMount() {
    const { onDone } = this.props;
    const driver = createDriver({ wrapper: document.body, dataHook });

    await driver.openCalendarWindow();

    onDone();
  }
  render() {
    const { datePickerInputProps } = this.props;

    return <DatePickerInput data-hook={dataHook} {...datePickerInputProps} />;
  }
}

visualize('DatePickerInput', () => {
  story('simple example', () => {
    snap('default props', (done) => (
      <DatePickerInputVisualComponent
        datePickerInputProps={{
          value: new Date('2020/10/10'),
          onChange: () => {},
        }}
        onDone={done}
      />
    ));
    snap(
      'Without a selected date',
      <DatePickerInput
        value=""
        onChange={() => {}}
        placeholderText="Select A Date"
      />,
    );
    snap('FilterDate - Prior for today dates (includes today)', (done) => (
      <DatePickerInputVisualComponent
        datePickerInputProps={{
          value: new Date('2020/10/10'),
          placeholderText: 'Select A Date',
          filterDate: (date) => date <= new Date('2020/10/10'),
          onChange: () => {},
        }}
        onDone={done}
      />
    ));
    snap('FilterDate - feature dates only (includes today)', (done) => (
      <DatePickerInputVisualComponent
        datePickerInputProps={{
          value: new Date('2020/10/10'),
          placeholderText: 'Select A Date',
          filterDate: (date) => date >= new Date('2020/10/10'),
          onChange: () => {},
        }}
        onDone={done}
      />
    ));
    snap('Months dropdown', (done) => (
      <DatePickerInputVisualComponent
        datePickerInputProps={{
          value: new Date('2020/10/10'),
          placeholderText: 'Select A Date',
          showMonthDropdown: true,
          onChange: () => {},
        }}
        onDone={done}
      />
    ));
    snap('Years dropdown', (done) => (
      <DatePickerInputVisualComponent
        datePickerInputProps={{
          value: new Date('2020/10/10'),
          placeholderText: 'Select A Date',
          showYearDropdown: true,
          onChange: () => {},
        }}
        onDone={done}
      />
    ));
    snap('Months and years dropdown', (done) => (
      <DatePickerInputVisualComponent
        datePickerInputProps={{
          value: new Date('2020/10/10'),
          placeholderText: 'Select A Date',
          showMonthDropdown: true,
          showYearDropdown: true,
          onChange: () => {},
        }}
        onDone={done}
      />
    ));
    snap(
      'Disabled Mode',
      <DatePickerInput
        value={new Date('2020/09/20')}
        onChange={() => {}}
        placeholderText="Select A Date"
        disabled
      />,
    );
    snap(
      'Error mode',
      <DatePickerInput
        value={new Date('2020/09/20')}
        onChange={() => {}}
        placeholderText="Select A Date"
        hasError
        errorMessage="Error Message"
      />,
    );
  });
});
