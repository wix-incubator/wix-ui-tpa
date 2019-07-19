import * as React from 'react';
import { Rating, Mode } from '../index';
import extendedStyles from './RatingExtendedExample.st.css';

export const RatingExtendedExample = props => (
  <div>
    <Rating
      value={0}
      onSelect={val => console.log(val)}
      mode={Mode.EDIT}
      {...extendedStyles('rating')}
    />

    <Rating
      value={3}
      onSelect={val => console.log(val)}
      {...extendedStyles('rating')}
    />
  </div>
);
