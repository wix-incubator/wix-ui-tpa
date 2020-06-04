import * as React from 'react';
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
          isMultiday
          time="20:30"
          title="Blink 182 Concert"
        />
      </div>
    </div>
  );
};
