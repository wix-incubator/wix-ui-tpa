import * as React from 'react';
import { CalendarContext } from './Calendar';
import { CalendarContextStructure } from '../../../dist/es/src/components/Calendar/Calendar';

export class CalendarComponent<P = null, S = null> extends React.Component<
  P,
  S
> {
  context: CalendarContextStructure;

  renderWithContext = (context: CalendarContextStructure) => {
    return null;
  };

  render() {
    return (
      <CalendarContext.Consumer>
        {context => {
          this.context = context;
          return this.renderWithContext(context);
        }}
      </CalendarContext.Consumer>
    );
  }
}
