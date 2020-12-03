import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { DatePicker, DatePickerProps } from './';
import { datePickerDriverFactory } from './DatePicker.driver';

const createDriver = uniTestkitFactoryCreator(datePickerDriverFactory);
const dataHook = 'storybook-datepicker';

interface DatePickerVisualProps {
  datePickerProps: DatePickerProps;
  onDone(): void;
}

class DatePickerVisualComponent extends React.Component<DatePickerVisualProps> {
  static defaultProps = {
    datePickerProps: {},
    onDone: () => {},
  };

  async componentDidMount() {
    const { onDone } = this.props;
    const driver = createDriver({ wrapper: document.body, dataHook });

    await driver.openCalendarWindow();

    onDone();
  }
  render() {
    const { datePickerProps } = this.props;

    return <DatePicker data-hook={dataHook} {...datePickerProps} />;
  }
}

visualize('DatePicker', () => {
  story('simple example', () => {
    snap('default props', done => (
      <DatePickerVisualComponent
        datePickerProps={{
          value: new Date('2020/10/10'),
          onChange: () => {},
        }}
        onDone={done}
      />
    ));
    snap(
      'Without a selected date', done => (
        <DatePickerVisualComponent
            datePickerProps={{
              value: '',
              placeholderText: 'Select A Date',
              onChange: () => {},
            }}
            onDone={done}
        />
    ));
    snap(
      'FilterDate - Prior for today dates (includes today)', done => (
          <DatePickerVisualComponent
              datePickerProps={{
                value: new Date('2020/10/10'),
                placeholderText: 'Select A Date',
                filterDate: date => date <= new Date('2020/10/10'),
                onChange: () => {},
              }}
              onDone={done}
          />
    ));
    snap(
      'FilterDate - feature dates only (includes today)', done => (
        <DatePickerVisualComponent
            datePickerProps={{
              value: new Date('2020/10/10'),
              placeholderText: 'Select A Date',
              filterDate: date => date >= new Date('2020/10/10'),
              onChange: () => {},
            }}
            onDone={done}
        />
    ));
    snap(
        'Months dropdown', done => (
          <DatePickerVisualComponent
              datePickerProps={{
                value: new Date('2020/10/10'),
                placeholderText: 'Select A Date',
                showMonthDropdown: true,
                onChange: () => {},
              }}
              onDone={done}
          />
    ));
    snap(
      'Years dropdown', done => (
        <DatePickerVisualComponent
            datePickerProps={{
              value: new Date('2020/10/10'),
              placeholderText: 'Select A Date',
              showYearDropdown: true,
              onChange: () => {},
            }}
            onDone={done}
        />
    ));
    snap(
      'Months and years dropdown', done => (
        <DatePickerVisualComponent
            datePickerProps={{
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
      <DatePicker
        value={new Date('2020/09/20')}
        onChange={() => {}}
        placeholderText="Select A Date"
        disabled
      />,
    );
    snap(
      'Error mode',
      <DatePicker
        value={new Date('2020/09/20')}
        onChange={() => {}}
        placeholderText="Select A Date"
        hasError
        errorMessage="Error Message"
      />,
    );
  });
});
