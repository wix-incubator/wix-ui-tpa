## TextButton
An implementation of a TextButton for TPAs.
The TPA implementation provides a few default overridable styles. By default site theme is used.

## Theme properties

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| MainTextColor  | string   | none | The color of the text instead of the default color set by priority |
| MainTextFont  | string   | none | The font of the text instead of the default font |


| priority   | color | text-decoration | hovered color |
|------------|----------|--------------|-------------|
| primary | color-8 | none | color + 60% opacity |
| secondary  | color-5 | none  | color + 60% opacity |
| link  | color-5 | underline  | color + 60% opacity |

1. create an stylable file (e.g. TextButtonExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/TextButton/TextButton.st.css";
        -st-default: TPAButton;
    }
    
    .root {t
        -st-extends: TPAButton;
        -st-mixin: TPAButton(
                MainTextColor '"--textButtonTextColor"',
                MainTextFont '"--textButtonTextFont"'
        );
    }

    ```

2. Create a component that uses it
    ``` javascript
    import { TextButton } from 'wix-ui-tpa/TextButton';
    import { classes } from './TextButtonExt.st.css';

    const TextButtonExt = (props) => <TextButton {...props} className={classes.root} />;
    ```
