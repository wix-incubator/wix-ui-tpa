import * as React from 'react';

import { AvatarGroup } from '../index';
import { AvatarGroupSize } from '../AvatarGroup';
import extendedStyles from './ExtendedExample.st.css';

const items = [
  {},
  { name: 'anonymous' },
  { name: 'Eve', src: 'https://randomuser.me/api/portraits/women/87.jpg' },
  { name: 'John', src: 'https://randomuser.me/api/portraits/men/69.jpg' },
];

export const ExtendedExample = props => (
  <div>
    <div>
      <AvatarGroup
        {...extendedStyles('root', {}, props)}
        items={[...items]}
        size={AvatarGroupSize.large}
      />
    </div>

    <div>
      <AvatarGroup
        {...extendedStyles('root', {}, props)}
        items={[...items, ...items]}
        size={AvatarGroupSize.small}
      />
    </div>

    <div>
      <AvatarGroup
        {...extendedStyles('root', {}, props)}
        items={[...items, ...items, ...items]}
        maxAmount={9}
        size={AvatarGroupSize.xxSmall}
      />
    </div>
  </div>
);
