import * as React from 'react';
import { Rating, Mode } from '../index';
import extendedStyles from './RatingExtendedExample.st.css';

export const RatingExtendedExample = props => (
  <div>
    <div>
      <h3>Rating Input</h3>
      <Rating
        value={0}
        onSelect={val => console.log(val)}
        {...extendedStyles('rating')}
      />
    </div>
    <div>
      <h3>Rating Display</h3>
      <Rating value={3} mode={Mode.Display} {...extendedStyles('rating')} />
    </div>
  </div>
);
