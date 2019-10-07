## Dropdown
An implementation of an Dropdown for TPAs.
A Dropdown presents a list of options and allows a user to select one of the options.

The Dropdown TPA implementation provides a few default styles. 
By default site theme is used.
The styles can NOT be overridable.

### Theme properties

| **Desktop** | **Component** | **Font Theme**  | **Size**    | **Color**  | **Opacity** |
|-------------|---------------|-----------------|-------------|------------|-------------|
|             | Background    |                 |             | Color 1    | 100%        |
|             | Border        |                 | 1px (width) | Color 5    | 40%         |
|             | Input Text    | Paragraph 2     | 16px        | Color 5    | 100%        |
|             | Subtitle Text | Paragraph 2     | 14px        | Color 5    | 60%         |
|             | Section Title | Paragraph 2     | 16px        | Color 3    | 100%        |
|             | Icon          |                 |             | Text Color | 100%        |
|             | Hover BG      |                 |             | Color 5    | 6%          |
| **Mobile**  | Background    |                 |             | Color 1    | 100%        |
|             | Border        |                 | 1px (width) | Color 5    | 40%         |
|             | Input Text    | Paragraph 2     | 14px        | Color 5    | 100%        |
|             | Subtitle Text | Paragraph 2     | 12px        | Color 5    | 60%         |
|             | Section Title | Paragraph 2     | 14px        | Color 3    | 100%        |
|             | Icon          |                 |             | Text Color | 100%        |
|             | Hover BG      |                 |             | Color 5    | 6%          |

### How to use
```javascript
import { Dropdown } from 'wix-ui-tpa/Dropdown';

<Dropdown
  placeholder="Placeholder Text"
  options={[
    { id: '0', value: 'Input Text 1', isSelectable: true },
    { id: '1', value: 'Input Text 2', isSelectable: true },
    { id: '2', value: 'Input Text 3', isSelectable: true },
    { id: '3', value: 'Input Text 4', isSelectable: false },
    { id: '4', value: 'Input Text 5', isSelectable: false },
  ]}
/>
```

For more options see [Api docs](https://wix-wix-ui-tpa.surge.sh/?activeTab=API&path=%2Fstory%2Fcomponents--dropdown).
