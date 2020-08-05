## Card
**Attention: The current API will be deprecated in the next major version.  
Please use the `upgrade` prop in order to adapt to the new API.  
For the new API see the [NewCard](../NewCard/NewCard.tsx) documentation**
 
An implementation of an Card for TPAs,
The TPA implementation provides few extendable theme properties with the ability to override the base properties as well,

By default the Card will pull the theme from the site (site colors),

## Theme properties (All are optional)

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| MainCardColor  | string   | color-1 | The color of the Card instead of the default color |
| MainInfoColor  | string   | color-1 | The color of the info container instead of the default color |
| MainMediaColor  | string   | color-5 20% opacity | The color of the image container instead of the default color |
| MainBorderColor  | string   | color-5 | The color of the border instead of the default color |
| MainBorderWidth  | string   | 1px | The width of the border instead of the default width |
| StackedInfoSidePadding  | string   | 32px | The width of Stack layout Side padding |

In order to override the theme, use Wix Stylable extends capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. CardExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/Card/Card.st.css";
        -st-default: TPACard;
    }

    .root {
        -st-mixin: TPACard(
            MainCardColor '"--cardColor"',
            MainInfoColor '"--infoColor"',
            MainMediaColor '"--imageColor"',
            MainBorderColor '"--borderColor"',
            MainBorderWidth '"--borderWidth"',
            StackedInfoSidePadding '"--infoSidePadding"'
      );
    }

    ```

2. Create a component that uses it
    ``` javascript
    import { classes } from './CardExt.st.css';

    const CardExt = (props) => <Card upgrade {...props} className={classes.root}/>;
    ```
