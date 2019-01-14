## Input
An implementation of an Input for TPAs,
The base implementation can be found [here](https://wix.github.io/wix-ui/?selectedKind=Components&selectedStory=Input).
The TPA implementation provides few extendable theme properties with the ability to override the base properties as well,

By default the Input will pull the theme from the site (site colors),

## Theme properties (All are optional)

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| MainBorderColor  | string   | Palette color-5 | The color of the input border - 60% opacity by default, 30% opacity when disabled |
| MainBackgroundColor  | string   | Palette color-1 | The color of the background of the input, 30% opacity when disabled, MainTextColor 5% opacity when hovered |
| MainTextColor  | string   | Palette color-5 | The color of the text/placeholder, 30% opacity when disabled, 60% opacity for placeholder |
| lineHeight  | css height   | 42px | the height of the input with border |
| fontSize  | css size   | 16px | the size of the text inside the input |

Full list of supported props can be found [here](https://wix.github.io/wix-ui/?selectedKind=Components&selectedStory=Input)


In order to override the theme, use Wix Stylable extends capabilities and wrap with withStylable HOC:

1. create an stylable file (e.g. InputExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/Input/Input.st.css";
        -st-default: Input;
    }

    //once mixin is pulled, you can override theme props as follows
    .root {
        -st-mixin: Input(
        //overrides
        );
    }
    ```

2. Create a component that uses it
    ``` javascript
    import inputStylesExt from './Input.st.css';
    import {withStylable} from 'wix-ui-core/withStylable';

    const InputExt = withStylable<InputProps>(Input, inputStylesExt, () => null);
    ```
