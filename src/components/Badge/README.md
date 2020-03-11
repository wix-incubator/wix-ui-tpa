## Badge
An implementation of an Badge for TPAs.

The Badge TPA implementation provides a few default overridable styles. By default site theme is used.

## Theme properties (all are optional)
| propName          | propType | description                                                      |
|-------------------|----------|------------------------------------------------------------------|
| BadgeBgColor      | string   | The color of the badge background instead of the default color   |
| BadgeTextColor    | string   | The color of the badge text instead of the default color          |
| BadgeBorderColor  | string   | The color of the badge border instead of the default color        |

## Default theme properties by badge type
|Badge  |BadgeBgColor|BadgeBorderColor|BadgeTextColor|
|-------|------------|----------------|--------------|
|Default|color-5(10%)|-               |color-5       |
|Light  |color-1     |color-5(10%)    |color-5       |
|Primary|color-8     |-               |color-1       |
