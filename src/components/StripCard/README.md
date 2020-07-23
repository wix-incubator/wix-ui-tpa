## StripCard
**Attention: The current API will be deprecated in the next major version.  
Please use the `upgrade` prop in order to adapt to the new API.  
For the new API see the [NewCard](../NewCard/NewCard.tsx) documentation**

An implementation of an StripCard for TPAs,
The TPA implementation provides few extendable theme properties with the ability to override the base properties as well,

By default the StripCard will pull the theme from the site (site colors),

## Theme properties (All are optional)

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| MainBGColor  | string   | color-1 | The color of the card background instead of the default color |
| MainMediaColor  | string   | color-5 20% opacity | The color of the image container instead of the default color |
| MainBorderColor  | string   | color-5 20% opacity | The color of the border instead of the default color |
| MainBorderWidth  | number   | 0px | The width of the border instead of the default width |


In order to override the theme, use Wix Stylable extends capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. CardExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/StripCard/StripCard.st.css";
        -st-default: TPAStripCard;
    }

    .root {
        -st-mixin: TPAStripCard(
            MainBGColor '"--backgroundColor"',
            MainMediaColor '"--imageColor"',
            MainBorderColor '"--borderColor"',
            MainBorderWidth '"--borderWidth"',
            MainSidePadding '"--sidePadding"'
      );
    }

    ```

2. Create a component that uses it
    ``` javascript
    import { classes } from './StripCardExt.st.css';

    const StripCardExt = (props) => <StripCard {...props} className={classes.root} />;
    ```
