import * as React from 'react';
import { Ratings, Mode } from '../index';
import extendedStyles from './RatingsExtendedExample.st.css';

export const RatingsExtendedExample = props => (
  <div>
    <div>
      <h3>Ratings Input</h3>
      <Ratings
        value={0}
        onSelect={val => console.log(val)}
        {...extendedStyles('ratings')}
      />
    </div>
    <div>
      <h3>Ratings Display</h3>
      <Ratings value={3} mode={Mode.Display} {...extendedStyles('ratings')} />
    </div>
  </div>
);
