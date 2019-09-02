## ToggleSwitch
An implementation of a ToggleSwitch for TPAs,
The base implementation can be found [here](https://wix.github.io/wix-ui/?selectedKind=Components&selectedStory=ToggleSwitchStory).
The TPA implementation provides few extendable theme properties with the ability to override the base properties as well.

By default the Toggle will pull the theme from the site (site colors).

## Theme properties (All are optional)

| propName      | propType | defaultValue    | description |
|---------------|----------|-----------------|-------------|
| BaseColor     | string   | Palette color-5 | The color of the track background in default state |
| SelectedColor | string   | Palette color-8 | The color of the toggle when it is on |
| KnobColor     | string   | Palette color-1 | The background color of the knob |
| DisabledColor | string   | Palette color-3 with 10% opacity | The color of the toggle when disabled |

In order to override the theme, use Wix Stylable extends capabilities and wrap with withStylable HOC:

1. create an stylable file (e.g. ToggleSwitchExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/ToggleSwitch/ToggleSwitch.st.css";
        -st-default: ToggleSwitch;
    }

    //once mixin is pulled, you can override theme props as follows
    .root {
        --runtimeSettings1: <some default value for a settings key>;
        -st-extends: ToggleSwitch;
        -st-mixin: ToggleSwitch(
                BaseColor '"color(--runtimeSettings1)"',
                //more overriders
        );
    }
    ```

2. Create a component that uses it
    ``` javascript
    import ToggleSwitch from 'wix-ui-tpa/ToggleSwitch';
    import toggleSwitchStylesExt from './ToggleSwitchExt.st.css';

    const ToggleSwitchExt = (props) => <ToggleSwitch {...props} {...toggleSwitchStylesExt('root', {}, props)}/>;
    ```
