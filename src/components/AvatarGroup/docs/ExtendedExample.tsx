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
        items={[...items]}
        size={AvatarGroupSize.large}
        {...extendedStyles('avatarGroup', {}, props)}
      />
    </div>

    <div>
      <AvatarGroup
        items={[...items, ...items]}
        size={AvatarGroupSize.small}
        {...extendedStyles('avatarGroup', {}, props)}
      />
    </div>

    <div>
      <AvatarGroup
        items={[...items, ...items, ...items]}
        maxAmount={9}
        size={AvatarGroupSize.xxSmall}
        {...extendedStyles('avatarGroup', {}, props)}
      />
    </div>
  </div>
);
