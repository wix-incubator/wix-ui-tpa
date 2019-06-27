# Using `wix-ui-tpa`
`wix-ui-tpa` is a React component library, designed for Wix TPA's.

In addition to giving a uniform design and behaviour as defined in the 
[Design System](https://zeroheight.com/7sjjzhgo2), `wix-ui-tpa` components 
allow developers to override specific style properties, and also externalize 
customization to their users.

Overriding styles is done using [Stylable](https://stylable.io).

## How to use
#### TPAComponentsProvider
Some components might have special behaviours and designs on `mobile` and `rtl` views.  
To support this, add the `TPAComponentsProvider` to the root of your application:
```typescript jsx
import React from 'react';
import { TPAComponentsProvider } from 'wix-ui-tpa/TPAComponentsConfig';

class App extends React.Component {
    render() {
        return (
            <TPAComponentsProvider value={{mobile: isMobile, rtl: isRtl}}>
                <MyStunningApplication> ... </MyStunningApplication>            
            </TPAComponentsProvider>
        );
    }
}
```

#### Using Components
Using components is as simple as:
```typescript jsx
// MySpecialButton.tsx

import React from 'react';
import { Button } from 'wix-ui-tpa/Button';
import styles from './MySpecialButton.st.css';

class MySpecialButton extends React.Component {
    render() {
        return (
            <Button
                {...styles('root', {}, this.props)} 
                onClick={this._onClick}>
                Schwift Me
            </Button>
        );
    }
}
```
The component's style can be customized like this:
```css
// MySpecialButton.st.css

:import {
    -st-from: "wix-ui-tpa/index.st.css";
    -st-named: Button;
}

.root {
    -st-extends: Button;
    -st-mixin: Button(
        MainTextColor: white,
        MainBackgroundColor: pink,
        MainBorderColor: black,
        MainBorderWidth: 1px,
        MainBorderRadius: 3px
    );
}
```
## `wix-style-processor`
TPA's get their colors and fonts (most of them) from the template's palette, 
and let the users override them using the settings panel.

You can read more about it [here](https://dev.wix.com/docs/uiux-basics/site-components/#color).

`wix-ui-tpa`'s components are wired to default colors and fonts from the site's palette, 
and in order to easily use and manipulate these variables, the library depends on `wix-style-processor`.

`wix-style-processor` is a runtime tool that allows us to write css that looks like this:
```css
.some-class {
    color: "opacity(color(color-3), 0.5)";
    font: "font({theme: 'Body-M', size: '16px', weight: 'bold'})})";
    background-color: "darken(color(color-8))";
}
```

For more information about `wix-style-processor` go to https://github.com/wix/wix-style-processor.  

In order to write legal Stylable code, a Stylable formatter was created, that receives the 
`wix-style-processor` method and its arguments, as its own arguments.

For instance the css above will be written like this:
```css
:import {
    -st-from: "../../../tpaStyles/styleableExt";
    -st-named: wixApply;
}

.some-class {
    color: wixApply(opacity, wixApply(color(color-3), 0.5);
    font: wixApply(font, {theme: 'Body-M', size: '16px', weight: 'bold'})});
    background-color: wixApply(darken, wixApply(color, color-8));
}
``` 
For more on Stylable formatters read [here](https://stylable.io/docs/references/formatters).

