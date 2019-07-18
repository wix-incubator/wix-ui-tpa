## AvatarGroup
An implementation of an AvatarGroup for TPAs

Uses (Avatar)[https://wix-wix-ui-tpa.surge.sh/?path=/story/components--avatar] component under the hood.

By default the AvatarGroup will pull the theme from the site (site colors),

## Theme properties (All are optional)

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| AvatarBorderColor  | string   | color-1 | The color of Avatar border. |

## How to use

``` javascript

  import { AvatarGroup } from 'wix-ui-tpa/AvatarGroup';

   <AvatarGroup
      items={[
        {},
        { name: 'anonymous' },
        {
          name: 'Eve',
          src: 'https://randomuser.me/api/portraits/women/87.jpg',
        },
        { name: 'John', src: 'https://randomuser.me/api/portraits/men/69.jpg' },
      ]}
      size="large"
    />
```