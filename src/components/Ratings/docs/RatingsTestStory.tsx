import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Ratings } from '..';
import { StoryCategory } from '../../../../stories/storyHierarchy';

function renderTest(props?: any) {
  const defaultProps = {
    value: 3,
  };
  const inputOption = ['Very baasa', 'Baasa', 'OK', 'Magniv', 'Achla'];

  return (
    <div style={{ margin: '10px', maxWidth: 200 }}>
      <div>
        <Ratings data-hook={'storybook-e2e-Ratings'} {...props} />
      </div>
      <div>
        <Ratings
          data-hook={'storybook-e2e-Ratings-withValue'}
          {...defaultProps}
          {...props}
        />
      </div>
      <div>
        <Ratings
          data-hook={'storybook-e2e-Ratings-inputOption'}
          inputOptions={inputOption}
          {...props}
        />
      </div>
      <div>
        <Ratings
          data-hook={'storybook-e2e-Ratings-inputOptionWithValue'}
          inputOptions={inputOption}
          {...defaultProps}
          {...props}
        />
      </div>
    </div>
  );
}

storiesOf(StoryCategory.TESTS, module).add('Ratings', renderTest);
