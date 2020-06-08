import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { Popover, PopoverProps } from './';

const defaultProps: PopoverProps = {
  onClose: () => {}
}

visualize('Popover', () => {
  story('render', () => {
    snap('default', <Popover {...defaultProps}/>);
  });
});
