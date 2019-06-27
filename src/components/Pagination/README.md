## Pagination
An implementation of Pagination for TPAs.
The TPA implementation provides few extendable theme properties with the ability to override the base properties as well,

## Theme properties (All are optional)

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| TextFont | string   | "{theme: 'Body-M', size: '16px'}" | The font of the pagination pages |
| TextFontColor  | string   | color-5 | The color of the pagination pages |
| SelectedTextFontColor  | string   | color-8 | The color of the selected page |
| DisabledTextFontColor  | string   | color-3 | The color of the disabled nav buttons |

In order to override the theme, use Wix Stylable extends capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. PaginationExt.st.css)
    ``` css
        :import {
            -st-from: "../../src/components/Pagination/Pagination.st.css";
            -st-default: TPAPagination;
        }

        .root {
            -st-mixin: TPAPagination(
                    TextFont '"--textFont"',
                    TextFontColor '"--textFontColor"',
                    SelectedTextFontColor '"--selectedTextFontColor"',
                    DisabledTextFontColor '"--disabledTextFontColor"'
            );
        }
    ```

2. Create a component that uses it
    ``` javascript
    import paginationStylesExt from './Pagination.st.css';

    const PaginationExt = (props) => <Pagination {...props} {...paginationStylesExt('root', {}, props)}/>;
    ```
