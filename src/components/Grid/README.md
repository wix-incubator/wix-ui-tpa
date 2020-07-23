## Grid
An implementation of Grid for TPAs,
The TPA implementation provides few extendable theme properties with the ability to override the base properties as well,

#### GridProps

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| children  | Grid.Item[]   | [] | items to fill the Grid |
| showRowDivider  | boolean   | false | displays divider between the rows |
| uniformRowHeight  | boolean   | true | set all the rows height the same as the tallest |
| maxColumns  | number   | 1 | max of columns per row |
| minColumnWidth  | number   | 0 | minimum width of each column in `px` * |
| width  | number   | 0 | the width of the grid in `px` ** |
| rowGap  | number   | 32 | the gap between each row |
| columnGap  | number   | 32 | the gap between each column |
| dividerWidth | string \| number   | `1px` | the width of the divider can accept number in `px` |

*if minColumnWidth was not provided it tried to detect the Card type of the first item and use it's min width value

**if `0` then it considered as responsive relevant for fullWidth

| Card Type   | Min Width in `px` |
|------------|----------|
| Card  | 700 (stacked 130)   |
| OverlappingCard  | 700   |
| StripCard  | 700   |

#### Grid.Item

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| children  | ReactNode   | - | the item to be rendered |
| colSpan  | number   | 1 | amount of columns the item span over |
| rowSpan  | number   | 1 | amount of rows the item span over |


By default the Grid will pull the theme from the site (site colors),

## Theme properties (All are optional)

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| MainDividerColor  | string   | color-5 | The color of the row divider |


In order to override the theme, use Wix Stylable extends capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. CardExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/Grid/Grid.st.css";
        -st-default: TPAGrid;
    }

    .root {
        -st-mixin: TPAGrid(
            MainDividerColor '"--dividerColor"'
      );
    }

    ```

2. Create a component that uses it
    ``` javascript
    import { classes } from './GridExt.st.css';

    const GridExt = (props) => <Grid {...props} className={classes.root} />;
    ```
