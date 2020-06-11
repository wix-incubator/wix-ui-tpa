import * as React from 'react';
import { TPAComponentsProvider } from '../../TPAComponentsConfig';
import { Event } from '../';
import styles from './EventWiringExample.st.css';

export const EventWiringExample = () => {
  return (
    <div {...styles('root')}>
      <div>
        <h4>Regular</h4>
        <Event {...styles('event')} time="20:30" title="Blink 182 Concert" />
      </div>
      <div>
        <h4>Selected</h4>
        <Event
          {...styles('event')}
          selected
          time="20:30"
          title="Blink 182 Concert"
        />
      </div>
      <div>
        <h4>Full Day</h4>
        <Event
          {...styles('event')}
          fullday
          time="20:30"
          title="Blink 182 Concert"
        />
      </div>
      <div>
        <h4>Right To Left Full Day</h4>
        <TPAComponentsProvider value={{ rtl: true }}>
          <Event
            {...styles('event')}
            fullday
            time="20:30"
            title="Blink 182 Concert"
          />
        </TPAComponentsProvider>
      </div>
    </div>
  );
};
