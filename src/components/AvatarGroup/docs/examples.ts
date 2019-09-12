import { AvatarGroupSize } from '../AvatarGroup';

export const importExample = `import { AvatarGroup } from 'wix-ui-tpa/AvatarGroup';`;

export const example = Object.keys(AvatarGroupSize).reduce((acc, size) => {
  return {
    ...acc,
    [size]: getAvatarGroups(size),
  };
}, {});

function getAvatarGroups(size) {
  const items = `{},
    {name: 'anonymous'},
    {name: 'Eve', src: 'https://randomuser.me/api/portraits/women/87.jpg'},
    {name: 'John', src: 'https://randomuser.me/api/portraits/men/69.jpg'},`;
  return `
  <div>
    <div>
      <AvatarGroup
        items={[${items}]}
        size="${size}"
      />
    </div>

    <div>
      <AvatarGroup
        items={[${items}${items}]}
        size="${size}"
      />
    </div>

    <div>
      <AvatarGroup
        items={[${items}${items}${items}]}
        maxAmount={9}
        size="${size}"
      />
    </div>
    
    <div>
      <AvatarGroup
        items={[${items}${items}${items}]}
        maxAmount={9}
        size="${size}"
      >
        <AvatarGroup.TextButton onClick={() => console.log('Clicked some more')}>Some more</AvatarGroup.TextButton>
      </AvatarGroup>
    </div>
  </div>`;
}
