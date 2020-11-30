import * as React from 'react';
import { description, header } from 'wix-storybook-utils/Sections';

import Playground from 'wix-storybook-utils/Playground';

import { allComponents } from '../utils/allComponents';
// @ts-ignore
import exampleCode from '!raw-loader!./example';
import { Tabs, ALIGNMENT } from '../../src/components/Tabs';
import { StoryCategory } from '../storyHierarchy';

const LAYOUT_INDEX_MAP = {
  0: 'vertical',
  1: 'horizontal',
};

const PlaygroundWrapper = () => {
  const [layoutIndex, setLayoutIndex] = React.useState(0);
  const isHorizontalLayout = layoutIndex === 1;

  return (
    <div
      style={{
        /* expand playground area to be wider than parent element */
        /* keep 5% distance from screen edge on left and right */
        margin: `0 calc((100vw / 2 - 100% / 2) * -1 + 5%)`,
      }}
    >
      <Tabs
        alignment={ALIGNMENT.left}
        activeTabIndex={layoutIndex}
        items={[{ title: 'Vertical layout' }, { title: 'Horizontal layout' }]}
        onTabClick={index => setLayoutIndex(index)}
      />
      <Playground
        key={LAYOUT_INDEX_MAP[layoutIndex]}
        compact={isHorizontalLayout}
        initiallyOpen={isHorizontalLayout}
        initialCode={exampleCode}
        scope={allComponents}
        formatSnippetUrl={id => `${window.parent.location.href}&snippet=${id}`}
      />
    </div>
  );
};

export default {
  category: StoryCategory.PLAYGROUND,
  storyName: 'Playground',
  sections: [
    header({
      title: 'Playground',
    }),

    description(`> "Design is not just what it looks like and feels like. Design is how it works" (Steve Jobs)

This playground is a great way to play with the \`wix-ui-tpa\` components and create prototypes.
`),

    description(<PlaygroundWrapper />),
  ],
};
