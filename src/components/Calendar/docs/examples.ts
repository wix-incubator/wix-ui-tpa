export const importExample = `import { Calendar } from 'wix-ui-tpa/Calendar';`;
import { CalendarConfig } from '../Calendar';

const weeklyConfig = JSON.stringify({
  days: [
    {
      events: [{}],
    },
    {
      events: [{}, {}],
    },
    {
      events: [],
    },
    {
      events: [{}, {}, {}],
    },
    {
      events: [{}, {}],
    },
    {
      events: [],
    },
    {
      events: [{}, {}],
    },
  ],
  weekDays: [
    { title: 'Mon' },
    { title: 'Tue' },
    { title: 'Wed' },
    { title: 'Thu' },
    { title: 'Fri' },
    { title: 'Sat' },
    { title: 'Sun' },
  ],
} as CalendarConfig);

export const simple = `
  <Calendar
    layout="weekly"
    config={${weeklyConfig}}
    calendarTitle="Default Calendar"
    selectorTitle="Default Period"
    todayButtonText="Today"
    onClickPrev={() => {alert('Clicked Prev')}}
    onClickNext={() => {alert('Clicked Next')}}
    onClickToday={() => {alert('Clicked Today')}}
  />
`;

export const complex = `
  <Calendar
    layout="weekly"
    config={${weeklyConfig}}
  >
    <div style={{display: 'block', height: '60px'}}>
      <div style={{display: 'inline-block', float: 'left'}}>
        <Calendar.Title>
          Custom Title
        </ Calendar.Title>
      </div>
      <div style={{display: 'inline-block', float: 'right', marginTop: '15px'}}>
        <Calendar.Selector
          onClickPrev={() => {alert('Clicked Prev')}}
          onClickNext={() => {alert('Clicked Next')}}
        >
          <span style={{textTransform: 'uppercase', fontSize: 14}}>
            Custom Period
          </span>
        </Calendar.Selector>
      </div>
    </div>
    <Calendar.TodayButton style={{margin: 'auto', marginTop: 10, display: 'block'}} priority="primary" onClick={() => {alert('Clicked Today')}}>
      Now
    </ Calendar.TodayButton>
  </Calendar>
`;

export const placeholder = `
  <Calendar
    layout="weekly"
    config={${weeklyConfig}}
    calendarTitle="Default Calendar"
    selectorTitle="Default Period"
    todayButtonText="Today"
    onClickPrev={() => {alert('Clicked Prev')}}
    onClickNext={() => {alert('Clicked Next')}}
    onClickToday={() => {alert('Clicked Today')}}
  >
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Calendar.TodayButton />
      <Calendar.Selector style={{margin: 0}}/>
    </div>
    <div style={{marginTop: 10}}>
      <Calendar.Title />
    </div>
  </Calendar>
`;

export const mobile = `
  <ExampleWithContextProps mobile={true}>
    <Calendar
      layout="weekly"
      config={${weeklyConfig}}
      calendarTitle="Mobile Calendar"
      selectorTitle="Default Period"
      todayButtonText="Today"
      onClickPrev={() => {alert('Clicked Prev')}}
      onClickNext={() => {alert('Clicked Next')}}
      onClickToday={() => {alert('Clicked Today')}}
    />
  </ExampleWithContextProps>
`;
