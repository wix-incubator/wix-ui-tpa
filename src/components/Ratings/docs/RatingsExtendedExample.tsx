import * as React from 'react';
import { Ratings, Mode } from '../index';
import extendedStyles from './RatingsExtendedExample.st.css';

export const RatingsExtendedExample = () => {
  const [value, setvalue] = React.useState(0);

  return (
    <div>
      <div>
        <h3>Ratings Input</h3>
        <Ratings
          value={value}
          inputOptions={['Very baasa', 'Baasa', 'OK', 'Magniv', 'Achla']}
          onSelect={val => setvalue(val)}
          {...extendedStyles('ratings')}
        />
      </div>
      <div>
        <h3>Ratings Display</h3>
        <Ratings
          ratingDisplay="3.0"
          countDisplay="150 Ratings"
          value={3}
          mode={Mode.Display}
          {...extendedStyles('ratings')}
        />
      </div>
    </div>
  );
};
