## ColorPicker
An implementation of a ColorPicker for TPAs

## Theme properties (All are optional)

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| ItemSize  | number   | 24 | The diameter of a single ColorPickerItem |
| BorderRadius  | number   | 12 | The border radius of ColorPickerItem |

In order to override the theme, use Wix Stylable extends capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. ColorPickerExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/ColorPicker/ColorPicker.st.css";
        -st-default: TPAColorPicker;
    }
    
    .root {
        -st-extends: TPAColorPicker;
        -st-mixin: TPAColorPicker(
                    ItemSize '"--itemSize"',
                    BorderRadius '"--borderRadius"'
            );
    }

    ```

2. Create a component that uses it
    ``` javascript
    import ColorPicker from 'wix-ui-tpa/ColorPicker';
    import colorPickerStylesExt from './ColorPickerExt.st.css';

    const ColorPickerExt = (props) => <ColorPicker {...props} {...colorPickerStylesExt('root', {}, props)}/>;

