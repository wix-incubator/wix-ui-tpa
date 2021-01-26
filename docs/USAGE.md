# Using `wix-ui-tpa`

`wix-ui-tpa` is a React component library, designed for Wix TPA's.

In addition to giving a uniform design and behaviour as defined in the 
[Design System](https://zeroheight.com/7sjjzhgo2), `wix-ui-tpa` components 
allow developers to override specific style properties, and also externalize 
customization to their users.

Overriding styles is done using [Stylable](https://stylable.io).

## Components Usage
### Basic Usages
The very basic usages will be simply importing the React components and using them in your app.
The components are pre-wired to the site colors palette and can be used with their default styles.
```typescript jsx
import React from 'react';
import { Button } from 'wix-ui-tpa/Button';

export const App: React.FC = () => <Button>Click me</Button>;
```

### Overriding predefined style params
In some cases, you might want to configure some component different from the others.
While all components are mapped to the color pallete, one can decide to map specific parts differently.
For example, a "Checkout Button" can be configured to have a different background color.
In that case, the library supports customizing predefined variables in the stylesheet. 

Simply use the component and extend the stylesheet

```typescript jsx
// CheckoutButton.tsx

import React from 'react';
import { Button } from 'wix-ui-tpa/Button';
import { classes } from './CheckoutButton.st.css';

export const CheckoutButton: React.FC = () => (
  <Button className={classes.root}>
    Checkout
  </Button>
);
```

And then, mix the needed overrides as defined in the components API:
```css
/* CheckoutButton.st.css */
:import {
    -st-from: "wix-ui-tpa/index.st.css";
    -st-named: Button;
}

.root {
    -st-mixin: Button(
        MainTextColor: white,
        MainBackgroundColor: pink,
        MainBorderColor: black,
        MainBorderWidth: 1px,
        MainBorderRadius: 3px
    );
}
```

#### An optimized way for style overriding - New!
Starting of version 2.10.0, new components will support a more optimized way to override styles, which **reduces bundle size significantly**.

*Note*: This will become the official way to override styles, however not all components are compatible yet (please check each component's documentation page to see if it supports the new way).

```css
/* myBadge.st.css */
:import {
    -st-from: "wix-ui-tpa/dist/src/components/Badge/Badge.st.css";
    -st-named: overrideStyleParams;
}

.root {
    -st-mixin: overrideStyleParams(
        BadgeBgColor gold
        BadgeTextColor black
    );
}
```

The main difference is that this approach mixes only the override classes instead of the entire component stylesheet.

For more on how to override wix-ui-tpa's components' styles properly, read [here](HOW_TO_OVERRIDE_STYLES_PROPERLY.md)

### Common configuration and widget state - `TPAComponentsProvider`
Some components might have special behaviours and designs on `mobile` and `rtl` views.  
To support this, add the `TPAComponentsProvider` to the root of your application:
```typescript jsx
import React from 'react';
import { TPAComponentsProvider } from 'wix-ui-tpa/TPAComponentsConfig';

export const App: React.FC = () => (
  <TPAComponentsProvider value={{mobile: isMobile, rtl: isRtl}}>
    <MyStunningApplication/>
  </TPAComponentsProvider>
);
```

You can read [here](RTL.md) about using RTL.

## Advanced Style Processing
TPAs get their colors and fonts (most of them) from the template's palette, and let the users override them using the settings panel.

You can read more about it [here](https://zeroheight.com/7sjjzhgo2/p/85d7a3-wiring).

`wix-ui-tpa`'s components are wired to default colors and fonts from the site's palette, and in order to easily use and manipulate these variables, 
the library relies on using the [tpa-style-webpack-plugin](http://github.com/wix-incubator/tpa-style-webpack-plugin) 
in conjunction with [`withStyles`](https://github.com/wix-private/native-components-infra#withstyles),
or [`wix-style-processor`](https://github.com/wix/wix-style-processor) (which is deprecated).

`wix-style-processor` should be added to your apps runtime.
