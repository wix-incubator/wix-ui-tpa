## Button
An implementation of an Button for TPAs,
The TPA implementation provides few extendable theme properties with the ability to override the base properties as well,

By default the Button will pull the theme from the site (site colors),

## Theme properties (All are optional)

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| MainTextColor  | string   | none | The color of the text instead of the default color set by priority |
| MainBackgroundColor  | string   | none | The color of the background instead of the default color set by priority |
| MainTextFont  | string   | none | The font of the text instead of the default font |
| MainBorderColor  | string   | none | The color of the border instead of the default |
| MainBorderWidth  | string   | none | The width of the border instead of the default |
| MainBorderRadius  | string   | none | The radius of the border instead of the default |

In order to override the theme, use Wix Stylable extends capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. ButtonExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/Button/Button.st.css";
        -st-named: TPAButton;
    }

    .root {
      -st-extends: TPAButton;
      -st-mixin: TPAButton(
              MainTextColor '"--buttonTextColor"',
              MainBackgroundColor '"--buttonBackgroundColor"',
              MainTextFont '"--buttonTextFont"',
              MainBorderWidth '"--borderWidth"',
              MainBorderRadius '"--borderRadius"',
              MainBorderColor '"--borderColor"'
      );
    }

    ```

2. Create a component that uses it
    ``` javascript
    import textStylesExt from './Button.st.css';

    const ButtonExt = (props) => <Button {...props} {...textStylesExt('root', {}, props)}/>;
    ```
