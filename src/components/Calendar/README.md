## Calendar
An implementation of an Calendar for TPAs
This Readme was auto-generated and needs to be filled manually

## Temporary draft notes

### Constants and config

```javascript
  export enum CalendarLayouts {
    weekly = 'weekly',
    monthly = 'monthly'
  }

  export interface CalendarConfig {
    days: CalendarDay[]
    weekDays: [string, string, string, string, string, string, string]
  }

  export enum CalendarDayCellFlag {
    today = 'today',
    past = 'past',
    future = 'future',
    context = 'context',
    active = 'active',
  }

  export enum CalendarEventCellFlag {
    active = 'active',
  }

  export interface CalendarDay {
    title: string,                 // Day number or name
    flags?: CalendarDayCellFlag[], // Sets flags to determine how day needs to be displayed
    events: CalendarEvent[]
  }

  export interface CalendarEvent {
    [custom: string]: any
    time?: string
    flags?: CalendarEventCellFlag[], // Sets flags to determine how day needs to be displayed
  }
```

### Minimal usage

Structure is auto-generated for elements which have not been provided.

Minimal usage weekly:

```xml
  <Calendar
    layout={CalendarLayouts.weekly}
    config={config}
    calendarTitle='Some title'
    selectorTitle='01/01-07/01'
    onClickPrev={prevClickHandler}
    onClickNext={nextClickHandler}
    onClickToday={todayClickHandler}
  />
```

Minimal usage monthly:

```xml
  <Calendar
    layout={CalendarLayouts.weekly}
    config={config}
    calendarTitle='Some title'
    selectorTitle='January, 2019'
    onClickPrev={prevClickHandler}
    onClickNext={nextClickHandler}
    onClickToday={todayClickHandler}
    onClickMore={moreClickHandler}
  />
```

### Partial customization example

```xml
  <Calendar
    layout={CalendarLayouts.weekly}
    config={config}
    selectorTitle='01/01-07/01'
    onClickPrev={prevClickHandler}
    onClickNext={nextClickHandler}
    onClickToday={todayClickHandler}
  >
    <Calendar.Title>
      <div className="superCoolStyle">
        Super cool styled title
      </div>
    </Calendar.Title>
  </Calendar>
```

### Full customization

Customized usage weekly:

```xml
  <Calendar
    layout={CalendarLayouts.weekly}
    config={config}
  >
    <Calendar.Title className={}>
      Some Title
    </Calendar.Title>

    <Calendar.Controls>
      <Calendar.Selector>
        onClickPrev={prevClickHandler}
        onClickNext={nextClickHandler}
      >
        01/01-07/01
      </Calendar.Selector>
      <Calendar.TodayButton
        onClick={todayClickHandler}
      />
    </Calendar.Controls>

    <Calendar.Grid>
      <Calendar.WeekDay>
        weekDay => weekDay.title
      </Calendar.WeekDay>
      <Calendar.Item>
        ({day, event}) => (
          <Calendar.Cell onClick=()>
            <Calendar.EventTime className={}>
              {event.time}
            </Calendar.EventTime>
          </Calendar.Cell>
        )
      </Calendar.Item>
      <Calendar.Popup
        dayIndex={}
        widthCells={}
        heightCells={}
        onClose={}
      >
        If popup is needed - show it here
      </Calendar.Popup>
    </Calendar.Grid>
  </Calendar>
```

Customized usage monthly:

```xml
  <Calendar
    layout={CalendarLayouts.monthly}
    config={config}
  >
    <Calendar.Title>
      Some Title
    </Calendar.Title>

    <Calendar.Controls>
      <Calendar.Selector>
        onClickPrev={prevClickHandler}
        onClickNext={nextClickHandler}
      >
        January, 2019
      </Calendar.Selector>
      <Calendar.TodayButton onClick={todayClickHandler} />
    </Calendar.Controls>

    <Calendar.Grid>
      <Calendar.WeekDay>
        weekDay => weekDay.title
      </Calendar.WeekDay>
      <Calendar.Item>
        ({day}) => (
          <Calendar.Cell onClick={}>
            <Calendar.EventTime className={}>
              {day.events[0].time}
            </Calendar.EventTime>
          </Calendar.Cell>
        )
      </Calendar.Item>
      <Calendar.Popup
        dayIndex={}
        widthCells={}
        heightCells={}
        onClose={}
      >
        If popup is needed - show it here
      </Calendar.Popup>
    </Calendar.Grid>
  </Calendar>
```
