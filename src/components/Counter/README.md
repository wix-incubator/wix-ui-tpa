## Counter
An implementation of an Counter for TPAs

## Theme properties (All are optional)

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| MainColor  | string   | color-5 | The color of border, buttons and input text |
| DisabledColor  | string   | color-3 | The color of border, buttons and input text when component (or button) is disabled |
| MainWidth  | string   | 96px | The width of Counter |

In order to override the theme, use Wix Stylable extends capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. CounterExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/Counter/Counter.st.css";
        -st-default: TPACounter;
    }

    .root {
        -st-extends: TPACounter;
        -st-mixin: TPACounter(
            MainColor '"--mainColor"',
            DisabledColor '"--disabledColor"',
            MainWidth '"--mainWidth"'
        );
    }

    ```

2. Create a component that uses it
    ``` javascript
    import Counter from 'wix-ui-tpa/Counter';
    import { classes } from './CounterExt.st.css';

    const CounterExt = (props) => <Counter {...props} className={classes.root} />;
