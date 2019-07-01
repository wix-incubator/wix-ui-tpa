# Contribution
## Adding a new component
To add a new component start by running `npm run generate`.
This will generate all the necessary files that are required for the new component, which includes:
* `Component.tsx` and `Component.st.css` - The logic and design of the component.
* `Component.driver.tsx` - a [`unidriver`](https://github.com/wix-incubator/unidriver) driver file.
* `Component.spec.tsx` - `enzyme` unit tests for the component.
* `Component.visual.tsx` - an `eyes-storybook` test file.
* `Component.e2e.tsx` - e2e test for interactive tests that require real dom
* `docs` folder - for `storybook` documentation.
* `index.tsx` - for exporting.
* `README.md` - documentation file.

## Developing A Component
refer to [Component Guidelines](COMPONENT_GUIDELINES.md).

## Testing
When generating a new component we get 3 different test files:
1) `*.spec.tsx` - enzyme test file
2) `*.visual.tsx` - eyes-storybook visual test file
3) `*.e2e.tsx` - protractor test file

Enzyme tests should be done for all components, and are used to ensure the component's 
API works as expected.  
For more on enzyme tests see [here](https://github.com/wix/wix-style-react/blob/master/docs/contribution/TESTING.md#component-unit-tests).

`eyes-storybook` tests take snapshots of the component, and ensure the component's style and 
responsive behaviour work as expected.  
For more on `eyes-storybook` visual tests see [here](https://github.com/wix/wix-style-react/blob/master/docs/contribution/VISUAL_TESTING.md).

Protractor e2e tests are mostly needed when a real browser is needed to ensure the component
is working as expected.  
Some components have different states on different user interactions, that cannot be tested using enzyme, 
and visual tests. In these cases e2e tests come in handy.  
For more on e2e tests see [here](https://github.com/wix/wix-style-react/blob/master/docs/contribution/WRITING_E2E_TESTS.md).  

For component interaction we write the `*.driver.tsx` driver file.  
More on this can be read [here](https://github.com/wix/wix-style-react/blob/master/docs/contribution/TEST_DRIVERS_GUIDELINES.md).

 
## `wix-style-processor`
TPA's get their colors and fonts (most of them) from the template's palette, 
and let the users override them using the settings panel.

You can read more about it [here](https://dev.wix.com/docs/uiux-basics/site-components/#color).

`wix-ui-tpa`'s components are wired to default colors and fonts from the site's palette, 
and in order to easily use and manipulate these variables, the library depends on `wix-style-processor`.

`wix-style-processor` is a runtime tool that allows us to write css that looks like this:
```css
.some-class {
    color: "opacity(color(color-3), 0.5)";
    font: "font({theme: 'Body-M', size: '16px', weight: 'bold'})})";
    background-color: "darken(color(color-8))";
}
```

For more information about `wix-style-processor` go to https://github.com/wix/wix-style-processor.  

In order to write legal Stylable code, a Stylable formatter was created, that receives the 
`wix-style-processor` method and its arguments, as its own arguments.

For instance the css above will be written like this:
```css
:import {
    -st-from: "../../../tpaStyles/styleableExt";
    -st-named: wixApply;
}

.some-class {
    color: wixApply(opacity, wixApply(color(color-3), 0.5);
    font: wixApply(font, {theme: 'Body-M', size: '16px', weight: 'bold'})});
    background-color: wixApply(darken, wixApply(color, color-8));
}
``` 
For more on Stylable formatters read [here](https://stylable.io/docs/references/formatters).
