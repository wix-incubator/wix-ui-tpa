## Text
An implementation of an Text for TPAs,
The TPA implementation provides few extendable theme properties with the ability to override the base properties as well,

By default the Text will pull the theme from the site (site colors),

## Theme properties (All are optional)

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| MainTextColor | string   | none | The color of the text instead of the default color set by typography |
| MainTextFont  | string   | none | The font of the text instead of the default font set by typography |

In order to override the theme, use Wix Stylable extends capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. TextExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/Text/Text.st.css";
        -st-named: textStyle, overrideStyle;
    }

    .root {
    }

    .root .overrideStyle {
        --textColor: ;
        --textFont: ;

        -st-mixin: textStyle (
            MainTextColor '"color(--textColor)"',
            MainTextFont '"font(--textFont)"'
        )
    }

    ```

2. Create a component that uses it
    ``` javascript
    import textStylesExt from './Text.st.css';

    const TextExt = (props) => <Text {...props} {...textStylesExt('root', {}, props)}/>;
    ```
