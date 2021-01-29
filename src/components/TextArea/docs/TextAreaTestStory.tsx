import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TextArea } from '..';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const someMaxLength = 3;

const TextAreaTest = (props: any) => {
  const { maxLength } = props;
  const [value, setValue] = React.useState('');

  return (
    <TextArea
      data-hook={'storybook-e2e-TextArea'}
      onChange={(e) => setValue(e.target.value)}
      value={value}
      ariaLabel={'Some Label'}
      maxLength={maxLength}
    />
  );
};

storiesOf(`${StoryCategory.TESTS}/TextArea`, module).add('Max Length', () => (
  <TextAreaTest maxLength={someMaxLength} />
));
