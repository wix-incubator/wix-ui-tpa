import * as React from 'react';
import { Event } from '../';
import styles from './EventWiringExample.st.css';

export const EventWiringExample = () => {
  return (
    <div {...styles('flexContainer')}>
      <div>
        <h4>Regular</h4>
        <Event {...styles('root')} time="20:30" title="Blink 182 Concert" />
      </div>
      <div>
        <h4>All Day</h4>
        <Event
          {...styles('root')}
          isMultiday
          time="20:30"
          title="Blink 182 Concert"
        />
      </div>
    </div>
  );
};
