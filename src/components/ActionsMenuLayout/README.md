## ActionsMenuLayout
An implementation of an ActionsMenuLayout for TPAs

ActionMenu is just a popup you'll get when openin 3-dors Menu, Drodpowdn etc. It does not control it's position on screen on desktop, and will always open from the bottom of the screen with full width on mobile.

Child of `ActionsMenuLayout` must be either `Divider` or `ActionsMenuLayoutItem`, see Examples section for details.


The `ActionsMenuLayout` implementation provides a few default overridable styles. By default site theme is used.

## Theme properties (all are optional)
| propName              | propType | description                                                |
|-----------------------|----------|------------------------------------------------------------|
| MenuBackgroundColor   | string   | The color of the background instead of the default color   |
| MenuBorderWidth       | string   | The width of the menu border instead of the default one    |
| MenuBorderColor       | string   | The color of the menu border instead of the default color  |


Also, the `ActionsMenuLayoutItem` implementation provides a few default overridable styles. By default site theme is used.

## Theme properties (all are optional)
| propName         | propType | description                                               |
|------------------|----------|-----------------------------------------------------------|
| ItemFont         | string   | The font of the content text instead of the default one   |
| ItemSubtitleFont | string   | The font of the subtitle text instead of the default one  |
