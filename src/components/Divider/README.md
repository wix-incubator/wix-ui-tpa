## Divider
An implementation of an Divider for TPAs,
The TPA implementation provides few extendable theme properties with the ability to override the base properties as well,

By default the Divider will pull the theme from the site (site colors),

## Theme properties (All are optional)

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| MainDividerColor  | string   | none | The color of the divider instead of the default color |
| MainDividerWidth  | string   | none | The width of the divider instead of the default width |

In order to override the theme, use Wix Stylable extends capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. DividerExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/Divider/Divider.st.css";
        -st-default: TPADivider;
    }
    
    .root {
        -st-mixin: TPADivider(
            MainDividerColor '"--dividerColor"',
            MainDividerWidth '"--dividerWidth"'
      );
    }

    ```

2. Create a component that uses it
    ``` javascript
    import {Divider} from 'wix-ui-tpa/Divider';
    import { classes } from './DividerExt.st.css';

    const DividerExt = (props) => <Divider {...props} className={classes.root} />;
    ```
