## IconButton
An implementation of an IconButton for TPAs
By default the IconButton will pull the theme from the site (site colors),

## Theme properties (All are optional)

| propName   | propType | defaultValue                     | description                    |
|------------|----------|----------------------------------|--------------------------------|
| IconColor  | string   | color-5                          | The color of the icon border   |

In order to override the theme, use Wix Stylable `extends` capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. IconButtonExt.st.css)
    ``` css
    :import {
      -st-from: "../IconButton.st.css";
      -st-default: TPAIconButton;
    }
    
    .root {
      -st-mixin: TPAIconButton(
        IconColor '"color(--iconColor)"'
      );
    }
    ```

2. Create a component that uses it
    ``` javascript
    import * as React from 'react';
    import { classes } from './IconButtonExt.st.css';
    import { ReactComponent as ShareIcon } from './Share.svg';
    import { IconButton } from 'wix-ui-tpa/IconButton';
    
    export class IconButtonExtendedExample extends React.Component {
      render = () => (
        <IconButton
          icon={<ShareIcon />}
          {...this.props}
          className={classes.root} 
        />
      );
    }
    ```
