## Tags
An implementation of an Tags for TPAs
The TPA implementation provides few extendable theme properties with the ability to override the base properties as well,

By default the properties will pull the theme from the site (site colors/fonts),

## Theme properties (All are optional)

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| MainTextFont  | string   | Palette Body-M | Font size depends on the size prop, The font of the tag text instead of the default font |
| MainBorderWidth  | string   | 1px or 0px | Depends on the skin prop, The border width of the tag component instead of the default width |
| MainVerticalSpacing  | string   | 4px | The vertical spacing between tags component instead of the default spacing |
| MainHorizontalSpacing  | string   | 4px | The horizontal spacing between tags component instead of the default spacing |
| MainBorderRadius  | string   | 0px | The border radius of the tag component instead of the default radius |
| MainTextColor | string   | Palette color-5 | The color of the tag text instead of the default color |
| MainBackgroundColor | string   | Palette color-1 or color-5 with opacity 0.1 | Depends on the skin prop, The color of the tab background instead of the default color |
| MainBorderColor | string   | Palette color-5 with opacity 0.2 | Depends on the skin prop, The color of the tab border instead of the default color |
| HoverTextColor | string   | Palette color-5 | The color of the tag text on hover instead of the default color |
| HoverBackgroundColor | string   | Palette color-1 or color-5 with opacity 0.2 | Depends on the skin prop, The color of the tab background on hover instead of the default color |
| HoverBorderColor | string   | Palette color-5 with opacity 0.6 | Depends on the skin prop, The color of the tab border on hover instead of the default color |
| CheckedTextColor | string   | Palette color-1 | The color of the tag text on selected instead of the default color |
| CheckedBackgroundColor | string   | Palette color-8 | The color of the tab background on selected instead of the default color |

In order to override the theme, use Wix Stylable extends capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. TagsExt.st.css)
    ``` css
        :import {
            -st-from: "../../src/components/Tags/Tags.st.css";
            -st-default: TPATags;
        }

        .root {
            -st-mixin: TPATags(
                    MainTextColor '"--textColor"',
                    MainTextFont '"--textFont"'
            );
        }
    ```

2. Create a component that uses it
    ``` javascript
    import tagsStylesExt from './TagsExt.st.css';

    const TagsExt = (props) => <Tags {...props} {...tagsStylesExt('root', {}, props)}/>;
    `
