## IconToggle
An implementation of an IconToggle for TPAs,
The TPA implementation provides few extendable theme properties with the ability to override the base properties as well,

By default the IconToggle will pull the theme from the site (site colors),

## Theme properties (All are optional)

| propName   | propType | defaultValue     | description                                         |
|------------|----------|------------------|-----------------------------------------------------|
| IconColor  | string   | color-5          | The color of the icon instead of the default color  |
| LabelColor | string   | color-5          | The color of the label instead of the default color |
| LabelFont  | string   | Body-M 12px/16px | The font of the label instead of the default font   |

In order to override the theme, use Wix Stylable extends capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. IconToggleExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/IconToggle/IconToggle.st.css";
        -st-default: TPAIconToggle;
    }
    
    .root {
        -st-extends: TPAIconToggle;
        -st-mixin: TPAIconToggle(
            IconColor '"--iconColor"',
            LabelColor '"--labelColor"',
            LabelFont '"--labelFont"'
        );
    }

    ```

2. Create a component that uses it
    ``` javascript
    import IconToggle from 'wix-ui-tpa/IconToggle';
    import { classes } from './IconToggleExt.st.css';
    import { ReactComponent as StarIcon } from './Star.svg';

    const IconToggleExt = (props) => (
        <IconToggle 
            icon={<StarIcon />} 
            label="0"
            {...props}
            className={classes.root} 
        />);
    ```
