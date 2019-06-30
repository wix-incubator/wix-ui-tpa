# Contribution
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
