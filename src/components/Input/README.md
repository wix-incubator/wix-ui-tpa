## TpaInput
An implementation of an Input for TPAs,
The base implementation can be found [here](https://wix.github.io/wix-ui/?selectedKind=Components&selectedStory=Input).
The TPA implementation provides few extendable theme properties with the ability to override the base properties as well,

By default the Input will pull the theme from the site (site colors),

## Theme properties (All are optional)

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| MainColor  | string   | Palette color-8 | The main color of the toggle, all other colors are driven by it |
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

    }
    ```

2. Create a component that uses it
    ``` javascript
    import inputStylesExt from './Input.st.css';
    import {withStylable} from 'wix-ui-core/dist/src';

    const TpaInputExt = withStylable<InputProps>(Input, inputStylesExt, () => null);
    ```