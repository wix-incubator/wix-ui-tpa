# Guidelines for creating a `wix-ui-tpa` component
`wix-ui-tpa` components are used by TPA's and live in Wix's editor and viewer environment.  
These components will be used and interacted by Wix's *users-of-users*.  
Because of this, there are several considerations we should have in mind while working on a 
`wix-ui-tpa` component:

* `wix-ui-tpa` components are designed by the Design System team, which should approve any 
visual or behavioural change and addition, to the library. 

* Components' style should be customizable, and so, should allow overriding of css 
(in accordance with the design system's spec).

* Components should support SSR (server-side rendering).

* Components should not use javascript for their layout. Javascript calculations that rely on DOM 
dimensions are allowed only on user interactions.

* Components might have different styling and behaviour on mobile.

* Components might have different styling and behaviour on right-to-left locales.

* No assumptions should be made on the components' environment and surroundings. Components might
be used inside TPA pages, but also TPA widgets.  
So solutions like `@media-queries` might not work, and `window` shouldn't be directly accessed.

* Widget's in the editor are fluid in their dimensions. `wix-ui-tpa` components should support this.

* Components should be responsive by default.

* `wix-ui-tpa` are rendered for Wix's users-of-users, and so they must comply with web accessibility
 principles.
 
 ## Typography
 When creating a new component that renders text, we should in most cases use the `<Text/>` component with the correct props and style.  
 In some cases we might need to use a typography that isn't defined in the `<Text/>` component.  
 In this case, we rely on the style processor's syntax, to ensure we get the correct font from the viewer.
 
 
 ### How it works
 We use the [style processor's syntax](https://github.com/wix/wix-style-processor) to get our components wired correctly:  
 The platform (viewer/editor) references the different fonts by a theme name, such as `Body-M` for paragraph text, and `Heading-L` for titles.  
 To use these fonts we write for instance:
 ```css
:import {
  -st-from: "src/common/formatters.st.js";
  -st-named: font;
}

.myClass {
  font: font({theme: 'Body-M', size: '16px', weight: 'bold'});
}
 ```
 This will give us a bold, medium-body font (also identified as `font_8`), with `16px` font size.    
 Fonts might come as a Stylable variable as well. Then we will write it like this:  
```css
:import {
  -st-from: "src/common/formatters.st.js";
  -st-named: font;
}

:vars {
  MyFont: --overridable;
}

.myClass {
  font: font(value(MyFont));
}
 ```

The `font()` formatter we use here, is one of our helper [formatters](../src/common/formatters.st.js), which just give us a Stylable way of using the
style processor's syntax.  
You can read more about this syntax [here](https://github.com/wix-incubator/tpa-style-webpack-plugin#supported-css-functions)
 
 ### Fixing font size
Fonts are received from the platform as a [shorthand form](https://developer.mozilla.org/en-US/docs/Web/CSS/font) font, and that's why we
have to use it with `font:`.  
This defines the font with its family, size, line-height, style and more.  
However, we sometimes need to fix a certain property. So in these situations we need to explicitly override the specific property.

For instance, if we want to fix a component's font size, we will need to write: 
     
```css
:import {
  -st-from: "src/common/formatters.st.js";
  -st-named: font;
}

:vars {
  MyFont: --overridable;
}

.myClass {
  font: font(value(MyFont));
  font-size: 16px; 
}
 ```

 
 ### Mapping design spec to style-processor syntax
 The design system has a different naming convention for typography, as can be seen [here](https://zeroheight.com/7sjjzhgo2/p/00b9e9-typography), but the mapping is pretty simple:
 
  
 | Design Name | Style Processor Syntax |
 | ----------- | ---------------------- |
 | H2 | Page-title |
 | P2 | Body-M |
 | P3 | Body-S | 

