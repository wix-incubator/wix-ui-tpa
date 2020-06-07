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
        <h4>All Day</h4>
        <Event
          {...styles('event')}
          multiday
          time="20:30"
          title="Blink 182 Concert"
        />
      </div>
      <div>
        <h4>Right To Left All Day</h4>
        <TPAComponentsProvider value={{ rtl: true }}>
          <Event
            {...styles('event')}
            multiday
            time="20:30"
            title="Blink 182 Concert"
          />
        </TPAComponentsProvider>
      </div>
    </div>
  );
};
