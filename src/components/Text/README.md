## Text
An implementation of an Text for TPAs,
The TPA implementation provides few extendable theme properties with the ability to override the base properties as well,

By default the Text will pull the theme from the site (site colors),

## Theme properties (All are optional)

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| OverrideTextColor  | string   | none | The color of the text instead of the default color set by typography |
| OverrideTextFont  | string   | none | The font of the text instead of the default font set by typography |
| RunningTextColor  | string   | Palette color-3 | The color of the text when typography is runningText |
| RunningTextFont  | string   | Theme Body-M, lineHeight 1.5em, fontSize 16px | The font of the text when typography is runningText |
| SmallTitleColor  | string   | Palette color-5 | The color of the text when typography is smallTitle |
| SmallTitleFont  | string   | Theme Heading-M, lineHeight 1.5em, fontSize 22px | The font of the text when typography is runningText |

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
            OverrideTextColor '"color(--textColor)"',
            OverrideTextFont '"font(--textFont)"'
        )
    }

    ```

2. Create a component that uses it
    ``` javascript
    import textStylesExt from './Text.st.css';

    const TextExt = (props) => <Text {...props} {...textStylesExt('root', {}, props)}/>;
    ```
