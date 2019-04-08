## OverlappingCard
An implementation of an OverlappingCard for TPAs,
The TPA implementation provides few extendable theme properties with the ability to override the base properties as well,

By default the Card will pull the theme from the site (site colors),

## Theme properties (All are optional)

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| MainInfoColor  | string   | color-1 | The color of the info container instead of the default color |
| MainMediaColor  | string   | color-1 | The color of the image container instead of the default color |
| MainBorderColor  | string   | color-5 | The color of the border instead of the default color |
| MainBorderWidth  | string   | 1px | The width of the border instead of the default width |


In order to override the theme, use Wix Stylable extends capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. OverlappingCardExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/OverlappingCard/OverlappingCard.st.css";
        -st-default: TPACard;
    }

    .root {
        -st-mixin: TPACard(
            MainInfoColor '"--infoColor"',
            MainMediaColor '"--imageColor"',
            MainBorderColor '"--borderColor"'
            MainBorderWidth '"--borderWidth"'
      );
    }

    ```

2. Create a component that uses it
    ``` javascript
    import cardStylesExt from './OverlappingCardExt.st.css';

    const OverlappingCardExt = (props) => <OverlappingCard {...props} {...cardStylesExt('root', {}, props)}/>;
    ```
