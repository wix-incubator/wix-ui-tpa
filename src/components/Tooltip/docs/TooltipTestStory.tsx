import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Tooltip, TooltipProps } from '..';
import { testPropsList } from './testProps';
import { StoryCategory } from '../../../../stories/storyHierarchy';

function renderTest() {
  const defaultProps: Partial<TooltipProps> = {
    content: 'This is tooltip message',
  };

  return (
    <>
      {testPropsList.map((props, i) => {
        return (
          <div style={{ padding: '50px' }} key={i}>
            <Tooltip {...defaultProps} {...props}>
              Hover me for a tooltip, please.
            </Tooltip>
          </div>
        );
      })}
    </>
  );
}

storiesOf(StoryCategory.TESTS, module).add('Tooltip', renderTest);
