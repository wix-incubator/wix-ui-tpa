## Text
An implementation of an Text for TPAs,
The TPA implementation provides few extendable theme properties with the ability to override the base properties as well,

By default the Text will pull the theme from the site (site colors),

## Theme properties (All are optional)

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| MainTextColor | string   | depends on the typography prop | The color of the text instead of the default color set by typography |
| MainTextFont  | string   | depends on the typography prop | The font of the text instead of the default font set by typography |

| typography   | theme | size | line height | color |
|------------|----------|:--------------:|:-------------:|-------------|
| largeTitle | Palette Heading-M   | 32px | 1.25em | Palette color-5 |
| smallTitle  | Palette Page-title   | 24px  | 1.33em | Palette color-5 |
| listText  | Palette Body-M   | 16px  | 2em | Palette color-3 |
| runningText  | Palette Body-M   | 16px  | 1.5em | Palette color-3 |


In order to override the theme, use Wix Stylable extends capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. TextExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/Text/Text.st.css";
        -st-default: TPAText;
    }
    
    .root {
        -st-mixin: TPAText(
                MainTextColor '"--textColor"',
                MainTextFont '"--textFont"'
        );
    }

    ```

2. Create a component that uses it
    ``` javascript
    import {Text} from 'wix-ui-tpa/Text';
    import textStylesExt from './TextExt.st.css';

    const TextExt = (props) => <Text {...props} {...textStylesExt('root', {}, props)}/>;
    ```
