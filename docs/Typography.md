# Typography

## When using the library  

`wix-ui-tpa` components are wired to the site's fonts as predefined in the [design system](https://zeroheight.com/7sjjzhgo2/p/7181b5-tpa-design-system).  
In most cases, no extra work is needed in order to ensure the components render with the correct font-family, size and color.  


### Titles and body text:
The recommended way to use `wix-ui-tpa` typography is with the `<Text/>` component.

The `<Text/>` component receives a `typography` prop, which its values are mapped to the font according to the following table:

| Typography  | Font theme | Size | Line Height |
| ----------  | -----      | ----- | ----- |
| smallTitle  | Page-title | Desktop: 24px <br /> Mobile: 20px | Desktop: 1.33 <br /> Mobile: 1.4 |
| largeTitle  | Heading-M  | Desktop: 32px <br /> Mobile: 24px | Desktop: 1.25 <br /> Mobile: 1.33 |
| listText    | Body-M     | Desktop: 16px <br /> Mobile: 14px | Desktop: 2 <br /> Mobile: 1.72 |
| runningText | Body-M     | Desktop: 16px <br /> Mobile: 14px | Desktop: 1.5 <br /> Mobile: 1.42 |

It is rendered as a `span` by default, but this can be changed using the `tagName` prop

#### Example

```jsx
import { Text, TYPOGRAPHY } from 'wix-ui-tpa/Text';
...
export const MyApp = () => {
  return (
    <section>
      <Text tagName={'h2'} typography={TYPOGRAPHY.largeTitle}>Hello World!</Text>
      <Text typography={TYPOGRAPHY.runningText}>The quick brown fox jumps over the lazy dog</Text>
    </section>  
  );
}
```


## When contributing to the library
When creating a new component that renders text, we should in most cases use the `<Text/>` component with the correct props.  
In some cases we might need to use a typography that isn't defined in the `<Text/>` component.  
In this case, we rely on the style processor's syntax, to ensure we get the correct font from the viewer.


### How it works
We use the style processor's syntax to get our components wired correctly:  
The platform (viewer/editor) references the different fonts by a theme name, such as `Body-M` for paragraph text, and `Heading-L` for titles.  
To use these fonts we write for instance:
```css
.myClass {
  font: "font({theme: 'Body-M', size: '16px', weight: 'bold'})})"
}
```
This will give us a bold, medium-body font (also identified as `font_8`), with `16px` font size.  
You can read more about the syntax [here](https://github.com/wix-incubator/tpa-style-webpack-plugin#supported-css-functions)

### Mapping design spec to style-processor syntax
The design system has a different naming convention for typography, as can be seen [here](https://zeroheight.com/7sjjzhgo2/p/00b9e9-typography), but the mapping is pretty simple:

 
| Design Name | Style Processor Syntax |
| ----------- | ---------------------- |
| H2 | Page-title |
| P2 | Body-M |
| P3 | Body-S | 
