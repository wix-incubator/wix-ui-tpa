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
          value: new Date(),
          onChange: () => {},
        }}
        onDone={done}
      />
    ));
    snap(
      'Without a selected date',
      <DatePicker
        value=""
        onChange={() => {}}
        placeholderText="Select A Date"
      />,
    );
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
