import * as React from 'react';
import { Ratings, Mode } from '../index';
import extendedStyles from './RatingsExtendedExample.st.css';

export const RatingsExtendedExample = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <div>
        <h3>Ratings Input</h3>
        <Ratings
          name={'example1'}
          value={value}
          inputOptions={['Very baasa', 'Baasa', 'OK', 'Magniv', 'Achla']}
          onSelect={val => {
            setValue(val);
          }}
          className={extendedStyles.ratings}
        />
      </div>
      <div>
        <h3>Ratings Display</h3>
        <Ratings
          name={'example2'}
          ratingDisplay="3.0"
          countDisplay="150 Ratings"
          value={3}
          mode={Mode.Display}
          className={extendedStyles.ratings}
        />
      </div>
    </div>
  );
};
