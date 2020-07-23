## Tabs
An implementation of Tabs for TPAs.
The TPA implementation provides few extendable theme properties with the ability to override the base properties as well,

By default the properties will pull the theme from the site (site colors/fonts),

## Theme properties (All are optional)

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| MainTextColor | string   | Palette color-5 | The color of the tab text instead of the default color |
| MainTextFont  | string   | Palette Body-M 16px | The font of the tab text instead of the default font |
| SelectedTabIndicatorColor  | string   | Palette color-8 | The color of the selected tab border instead of the default color |
| IndicatorColor  | string   | Palette color-5 | The color of the tabs divider instead of the default color |

In order to override the theme, use Wix Stylable extends capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. TextExt.st.css)
    ``` css
        :import {
            -st-from: "../../src/components/Tabs/Tabs.st.css";
            -st-default: TPATabs;
        }

        .root {
            -st-mixin: TPATabs(
                    MainTextColor '"--textColor"',
                    MainTextFont '"--textFont"',
                    SelectedTabIndicatorColor '"--selectedTabIndicatorColor"',
                    IndicatorColor '"--indicatorColor"'
            );
        }
    ```

2. Create a component that uses it
    ``` javascript
    import { classes } from './Tabs.st.css';

    const TabsExt = (props) => <Tabs {...props} className={classes.root} />;
    ```
