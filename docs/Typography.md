# Typography

## When using the library  

`wix-ui-tpa` components are wired to the site's fonts as predefined in the [design system](https://zeroheight.com/7sjjzhgo2/p/7181b5-tpa-design-system).

So in most cases, no extra work is needed in order to ensure the components render with the correct font-family, size and color.  

### How it works

We use the style processor's syntax to get our components wired correctly:  
The platform (viewer/editor) references the different fonts by a theme name, such as `Body-M` for paragraph text, and `Heading-L` for titles.  
To use these fonts we write for instance:
```css
.myClass {
  font: "font({theme: 'Body-M', size: '16px', weight: 'bold'})})"
}
```
You can read more about it [here](https://github.com/wix-incubator/tpa-style-webpack-plugin#supported-css-functions)

 
In most TPA's fonts are wired to the site.  
Meaning the template defines the font of the site, or the user has chosen font for their site.


In some cases the fonts are fixed (font-family or size).

So when using `wix-ui-tpa` components, you probably shouldn't need to adjust the typography of the component.

For titles and running text, `wix-ui-tpa` provides the [`<Text />`](/?path=/story/components--text) component

## Titles and running text:


## When contributing to the library
Most of the time we should use the `Text` component and use the correct typography prop.

For cases where we need to use a font that's not part of the Text's API, we can define it directly in the stylable stylesheet.

In this case, we rely on the style processor's syntax, to ensure we get the correct font from the viewer.

Example:
  
