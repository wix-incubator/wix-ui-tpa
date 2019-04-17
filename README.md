# wix-ui-tpa

When writing a TPA application to be used in Wix websites, this package would allow you to use [wix-ui-core](https://github.com/wix/wix-ui/tree/master/packages/wix-ui-core) components with ad-hoc wrapping layer which comunicates with the Wix sdk in order to react to each relevant change in the settings pannel.

If this is the first time you are writing a TPA application, you would most likely want to read this [doc](https://dev.wix.com/).

#### Live demo - https://wix-wix-ui-tpa.surge.sh/
#### A demo app that uses it - https://github.com/wix/wix-ui-tpa-example

## Using the withStylable HOC wrapper

In order to customize a component using styleable, you should wrap the component you want to style using the withStyleable HOC.
The out of the box components provided by this library are inheriting the styles of the site according to the common defaults styles, but if you need to extend it do the following,

1. Create a stylable st.css file that extends the component that you want to style (e.g. an input):
    ```css
    //st.css file
    :import {
      -st-from: "wix-ui-tpa/dist/src/components/Input/Input.st.css";
      -st-default: Input;
    }

    .root {
      --yourSettingsKey: "color(color-5)"
      -st-extends: Input;
      -st-mixin: Input(
        //overriden definitions
        MainTextColor '"color(--yourSettingsKey)"'
      );
    }
    ```
    For more information about the capabilities of the stylable library refer to [https://stylable.io/](https://stylable.io/)
    
    For more information about the "color(something)" syntax please refer to [wix-style-processor](https://github.com/wix/wix-style-processor) documentation.


2. create your own component that uses the overridden theme
    ``` javascript
    import * as React from 'react';
    import {withStylable} from 'wix-ui-core/withStylable';
    import {Input, InputProps} from 'wix-ui-tpa/Input';
    import extendedStyles from './InputExtendedExample.st.css';

    export const InputExtendedExample = withStylable<InputProps>(Input, extendedStyles, () => null);
    ```

3. You can now render the new component:
    ``` javascript
        render() {
            return <InputExtendedExample/>;
        }
    ```

## Adding components to the application

Each component in `wix-ui-tpa` is an HOC that gets the `colors` and `fonts` of the site in addition to all the core component's props.

colors and sites are the values specified in the Wix sdk: `Wix.Styles.getStyleParams()`.

Now each time the user will change the settings pannel's components, it will update the style of the components.

In order to wrap a ui-core component with the TPA styles, repeate the same steps as the wrapping of wix-ui-tpa component described above, but with the correspondent component from ui-core lib,
You can use [Input](./src/components/Input/index.tsx) component as a good reference, it includes basic themeing as well as a test file.

As a general approach, each TPA stylable compoennt, should expose a limted set of stylable attributes, which are used in order to create the ui-core style, with the ability to override specific ones as well;
See [Input](./src/components/Input/Input.st.css) as an example, as you can see there are few variables defined in it (marked with /*Recommended Variables*/) followed by the entire list of variables defined in the parent component, which are built from the recommended set. The core mixin is than used in order to render the styles of the TPA theme, which allows the user of the library to either override a property that will impact several core properties (e.g. ***MainBorderColor***), or to override a core property (e.g. ***hoverBorderColor***) in order to achieve the desired style.
