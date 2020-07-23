## Checkbox
An implementation of a Checkbox for TPAs

## Theme properties (All are optional)

| propName   | propType | defaultValue     | description                                         |
|------------|----------|------------------|-----------------------------------------------------|
| IconColor  | string   | color-8          | The color of the icon instead of the default color  |
| BorderColor | string   | color-5  | The color of border around the icon |
| TextColor | string   | color-5  | The color of a label |

In order to override the theme, use Wix Stylable extends capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. CheckboxExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/Checkbox/Checkbox.st.css";
        -st-default: TPACheckbox;
    }

    .root {
        -st-mixin: TPACheckbox(
            TextColor '"--textColor"',
            BorderColor '"--borderColor"',
            IconColor '"--iconColor"'
        );
    }

    ```

2. Create a component that uses it
    ``` javascript
    import Checkbox from 'wix-ui-tpa/Checkbox';
    import { classes } from './CheckboxExt.st.css';

    const CheckboxExt = (props) => (
        <Checkbox
            onChange={() => {}}
            label="Label"
            {...props}
            className={classes.root}
        />);
    ```
