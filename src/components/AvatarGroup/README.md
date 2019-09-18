## AvatarGroup
An implementation of an AvatarGroup for TPAs

Uses [Avatar](https://wix-wix-ui-tpa.surge.sh/?path=/story/components--avatar) and [Text Button](https://wix-wix-ui-tpa.surge.sh/?path=/story/components--textbutton) under the hood.

Includes compound component `<AvatarGroup.TextButton>` that can be used to add a prestyled text link. Regular `<TextButton>` is also accepted.

By default the AvatarGroup will pull the theme from the site (site colors),

## Theme properties (All are optional)

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| AvatarBorderColor  | string   | color-1 | The color of Avatar border. |
| TextButtonFont  | string   | Secondary text button | The font of text button. |
| TextButtonColor  | string   | color-5 | The color of text button. |

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
