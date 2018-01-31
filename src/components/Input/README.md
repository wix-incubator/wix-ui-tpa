## TpaInput
An implementation of an Input for TPAs,
The base implementation can be found [here](https://wix.github.io/wix-ui/?selectedKind=Components&selectedStory=Input).
The TPA implementation provides few extendable theme properties with the ability to override the base properties as well,

By default the Input will pull the theme from the site (site colors),

## Theme properties (All are optional)

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| MainBorderColor  | string   | Palette color-5 | The color of the input border - 20% opacity by default, no opacity when focused |
| MainBackgroundColor  | string   | transparent | The color of the background of the input, 30% opacity when disabled |
| MainTextColor  | string   | Palette color-5 | The color of the text/placeholder, 30% opacity when disabled and placeholder |
| lineHeight  | css height   | 42px | the height of the input and the text |
| fontSize  | css size   | 15px | the size of the text inside the input |

Full list of supported props can be found [here](https://wix.github.io/wix-ui/?selectedKind=Components&selectedStory=Input)


In order to override the theme, use Wix Styleable extends capabilities and wrap with withStylable HOC:

1. create an styleable file (e.g. InputExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/Input/Input.st.css";
        -st-default: Input;
    }

    //once mixin is pulled, you can override theme props as follows
    .root {
        -st-extends: ToggleSwitch;
        -st-mixin: ToggleSwitch(
        //overrides
        );
    }
    ```

2. Create a component that uses it
    ``` javascript
    import inputStylesExt from './Input.st.css';
    import {withStylable} from 'wix-ui-core/dist/src';

    const TpaInputExt = withStylable<InputProps>(Input, inputStylesExt, () => null);
    ```