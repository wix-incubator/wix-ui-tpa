import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { BoxSelection, BoxSize } from './';

visualize('BoxSelection', () => {
  story('simple', () => {
    snap('default props', <BoxSelection name="hours" />);
    snap(
      'checked prop',
      <BoxSelection name="hours">
        <BoxSelection.Option checked id="1" />
        <BoxSelection.Option id="2" />
      </BoxSelection>,
    );
    snap(
      'checked prop and unavailable',
      <BoxSelection name="hours">
        <BoxSelection.Option unavailable id="1" />
        <BoxSelection.Option checked id="2" />
      </BoxSelection>,
    );
    snap(
      'checked, unavailable and disabled props',
      <BoxSelection name="hours">
        <BoxSelection.Option unavailable id="1" />
        <BoxSelection.Option checked id="2" />
        <BoxSelection.Option disabled id="3" />
      </BoxSelection>,
    );
    snap(
      'checked, unavailable and disabled props, and one box not selected',
      <BoxSelection name="hours">
        <BoxSelection.Option unavailable id="1" />
        <BoxSelection.Option checked id="2" />
        <BoxSelection.Option disabled id="3" />
        <BoxSelection.Option id="4" />
      </BoxSelection>,
    );
    snap(
      'small',
      <BoxSelection name="hours" size={BoxSize.small}>
        <BoxSelection.Option unavailable id="1" />
        <BoxSelection.Option checked id="2" />
        <BoxSelection.Option disabled id="3" />
        <BoxSelection.Option id="4" />
      </BoxSelection>,
    );
    snap(
      'inline',
      <BoxSelection name="hours" inline>
        <BoxSelection.Option unavailable id="1" />
        <BoxSelection.Option checked id="2" />
        <BoxSelection.Option disabled id="3" />
        <BoxSelection.Option id="4" />
      </BoxSelection>,
    );
    snap(
      'vertical',
      <BoxSelection name="hours" vertical>
        <BoxSelection.Option unavailable id="1" />
        <BoxSelection.Option checked id="2" />
        <BoxSelection.Option disabled id="3" />
        <BoxSelection.Option id="4" />
      </BoxSelection>,
    );
  });
});
