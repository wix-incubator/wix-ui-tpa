## TextField
An implementation of an TextField for TPAs,
The base implementation can be found [here](https://wix.github.io/wix-ui/?selectedKind=Components&selectedStory=Input).
The TPA implementation provides few extendable theme properties with the ability to override the base properties as well,

By default the TextField will pull the theme from the site (site colors),

## Theme properties (All are optional)

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| MainBorderColor  | string   | Palette color-5 | The color of the input border. 60% opacity by default and in disabled state, 100% opacity when component hovered or focused |
| MainBackgroundColor  | string   | Palette color-1 | The color of the background of the input |
| MainTextColor  | string   | Palette color-5 | The color of the text/placeholder. 60% opacity when disabled and for the placeholder |
| MainTextFont  |  string  | Palette Body-M size 16px | The font of the text/placeholder |

Full list of supported props can be found [here](https://wix.github.io/wix-ui/?selectedKind=Components&selectedStory=Input)


In order to override the theme, use Wix Stylable extends capabilities and wrap with withStylable HOC:

1. Create an stylable file (e.g. TextFieldExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/TextField/TextField.st.css";
        -st-default: TPATextField;
    }
    
    .root {
        -st-mixin: TPATextField(
          MainBackgroundColor '"--textFieldBackgroundColor"',
          MainTextColor '"--textFieldTextColor"',
          MainBorderColor '"--textFieldBorderColor"',
          MainTextFont '"--textFont"'
        );
    }
    ```

2. Create a component that uses it
    ``` javascript
    import {TextField} from 'wix-ui-tpa/TextField';
    import { classes } from './InputExt.st.css';

    const const InputExt = (props) => <TextField {...props} className={classes.root} />;
    ```
