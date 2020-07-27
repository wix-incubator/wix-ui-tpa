## CheckboxGroup
An implementation of a CheckboxGroup for TPAs

## Theme properties (All are optional)

| propName   | propType | defaultValue     | description                                         |
|------------|----------|------------------|-----------------------------------------------------|
| LabelColor  | string   | color-5          | The color of the label  |

In order to override the theme, use Wix Stylable extends capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. CheckboxGroupExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/Checkbox/Checkbox.st.css";
        -st-default: TPACheckboxGroup;
    }

    .root {
        -st-mixin: TPACheckboxGroup(
            LabelColor '"--labelColor"'
        );
    }

    ```

2. Create a component that uses it
    ``` javascript
    import CheckboxGroup from 'wix-ui-tpa/CheckboxGroup';
    import Checkbox from 'wix-ui-tpa/Checkbox';
    import { classes } from './CheckboxGroupExt.st.css';

    const CheckboxExt = (props) => (
        <CheckboxGroup
            label="Label"
            {...props}
            className={classes.root} 
        >
            <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 1️⃣" />
            <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 2️⃣" />
            <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 3️⃣" />
        </CheckboxGroup>);
    ```
