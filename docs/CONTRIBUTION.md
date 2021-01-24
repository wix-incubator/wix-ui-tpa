# Contribution

wix-ui-tpa is an open source ui library, therefore everyone is invited to contribute by solving bugs, improving documentation, and add new components (as long as they are aligned with our design guidelines).

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

We use [conventional commits](https://www.conventionalcommits.org) to create a readable CHANGELOG.

## Adding a new component
To add a new component start by running `npm run generate`.
This will generate all the necessary files that are required for the new component, which includes:
* `Component.tsx` and `Component.st.css` - The logic and design of the component.
* `Component.driver.tsx` - a [`unidriver`](https://github.com/wix-incubator/unidriver) driver file.
* `Component.spec.tsx` - `enzyme` unit tests for the component.
* `Component.visual.tsx` - an `eyes-storybook` test file.
* `Component.meta.tsx` - a [`ui-autotools`](https://github.com/wix-incubator/ui-autotools) test file - tests `SSR` and `A11Y`.
* `docs` folder - for `storybook` documentation.
  * `index.story.ts` - The storybook configuration.
  * `examples.ts` - The examples that will be displayed in the storybook under the `usage` tab.
* `perf` folder - for bundle size tests using [perfer](https://bo.wix.com/pages/perfer/)
  * `ComponentBasic.tsx` - A basic usage of our Component
  * `ComponentExtended.tsx` - Using the Component with style overrides (using Stylable's [`-st-mixin`](https://github.com/wix/wix-ui-tpa/blob/master/docs/USAGE.md#an-optimized-way-for-style-overriding---new))
  * `ComponentExtended.st.css` - Used by `ComponentExtended.tsx` ☝️
* `index.tsx` - for exporting.

## Developing A Component
refer to [Component Guidelines](COMPONENT_GUIDELINES.md).

## Testing
When generating a new component we get 4 different types of test files:
1) `*.spec.tsx` - enzyme test file
2) `*.visual.tsx` - eyes-storybook visual test file
3) `*.e2e.tsx` - protractor test file
4) `perf/*.tsx` - perfer test files

#### `spec`
Enzyme tests should be done for all components, and are used to ensure the component's 
API works as expected.  
For more on enzyme tests see [here](https://github.com/wix/wix-style-react/blob/master/packages/wix-style-react/docs/contribution/TESTING.md#component-unit-tests).

#### `visual`
`eyes-storybook` tests take snapshots of the component, and ensure the component's style and 
responsive behaviour work as expected.  
For more on `eyes-storybook` visual tests see [here](https://github.com/wix/wix-style-react/blob/master/packages/wix-style-react/docs/contribution/VISUAL_TESTING.md).

#### `e2e`
Protractor e2e tests are mostly needed when a real browser is needed to ensure the component
is working as expected.  
Some components have different states on different user interactions, that cannot be tested using enzyme, 
and visual tests. In these cases e2e tests come in handy.  
For more on e2e tests see [here](https://github.com/wix/wix-style-react/blob/master/packages/wix-style-react/docs/contribution/WRITING_E2E_TESTS.md).  

For component interaction we write the `*.driver.tsx` driver file.  
More on this can be read [here](https://github.com/wix/wix-style-react/blob/master/packages/wix-style-react/docs/contribution/TEST_DRIVERS_GUIDELINES.md).

#### `perf`
It's important for us to make sure our components don't take up too much space in our consumer's bundle.  
For that, we've integrated [perfer](https://bo.wix.com/pages/perfer/) into the library, and we test each component's bundle size.  
In addition, we want to make sure that overriding our component's styles doesn't take too much space as well.  
For that we have the `perf` folder with 2 simple files.  
One file has the most basic usage of the component, which tests the bundle size when using the component as-is, without style overrides.  
The second file uses the component, but also overrides any styling the component allows, so that we can assess the amount of extra space the stylesheet is taking.  
We can add any React file in this folder, and they will be added to the perfer test. This allows us to test special uses of the component, such as different prop variations, child components, etc.
 
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

In order to write legal Stylable code, and have more readable css,
several Stylable formatters were created:
* `fallback` - `fallback(value, defaultValue)` - fallbacks to a default value.
* `zeroAsTrue` - `zeroAsTrue(value)` - returns value as a string if value is a number, else the value itself.
* `color` - `color(color-3)` - assigns a color from the site's palette.
* `applyUnit` - `applyUnit(value, unit)` - applies a unit to the given value.
* `applyOpacity` - `applyOpacity(color, alpha)` - applies the given opacity to the given color. 
* `calculate` - `calculate(+, val1, val2)` - returns the native calc function for the given operator and numbers.
* `string` - `string(-)` - stringifies the given value.
* `font` - `font(value)` - assigns a font from the site's fonts.
* `join` - `join(color1, color2)` - blends two colors.
* `withoutOpacity` - `withoutOpacity(color)` - removes the opacity of a site palette color.
* `darken` - `darken(color, num)` - makes a darkened version of the given site palette color.

These formatters are based on the functions provided by `wix-style-processor`.  
You can see them [here](https://github.com/wix/wix-style-processor/blob/master/src/defaultPlugins.ts).

As an example, the css above will be written like this:
```css
:import {
    -st-from: "../../../common/formatters.st.js";
    -st-named: applyOpacity, color, font, darken;
}

.some-class {
    color: applyOpacity(color(color-3), 0.5);
    font: font({theme: 'Body-M', size: '16px', weight: 'bold'});
    background-color: darken(color(color-8));
}
``` 
For more on Stylable formatters read [here](https://stylable.io/docs/references/formatters).

## How to create a PR
Your commits must be signed so please follow all the following steps.

Read more about it in `wix-style-react`'s excellent. Documentation [here](https://github.com/wix/wix-style-react/blob/master/packages/wix-style-react/docs/contribution/CREATE_PR.md).



