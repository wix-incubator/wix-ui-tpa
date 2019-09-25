import { DROPDOWN_ALIGNMENT } from '../Dropdown';

import {
  baseOptions,
  numberOptions,
  optionsWithIcon,
  optionsWithIconAndSubtitles,
  optionsWithSections,
  optionsWithSubtitle,
} from './exampleOptions';

const ShareIcon = `
<svg width="24px" height="24px">
    <path d="M14.2736842,7.11666667 C12.1894737,7.21111111 3.66315789,8.62777778 3,21 C4.51578947,17.2222222 8.11578947,14.6722222 12.1894737,14.6722222 C12.8526316,14.6722222 13.5157895,14.7666667 14.2736842,14.8611111 L14.2736842,18.1666667 L21,11.0833333 L14.2736842,4 L14.2736842,7.11666667 Z"/>
</svg>`;

export const importExample = `import { Dropdown, DROPDOWN_ALIGNMENT } from 'wix-ui-tpa/Dropdown';`;

export const example = `
    <Dropdown placeholder="Placeholder Text" options={${JSON.stringify(
      baseOptions,
    )}} />
`;

export const disabledExample = `
    <Dropdown placeholder="Placeholder Text" disabled options={${JSON.stringify(
      baseOptions,
    )}}/>
`;

export const alignmentExample = `
    <Dropdown placeholder="Placeholder Text" options={${JSON.stringify(
      baseOptions,
    )}} alignment="${DROPDOWN_ALIGNMENT.center}" label="Label Text" />
`;

export const errorExample = `
    <Dropdown placeholder="Placeholder Text" error={true} options={${JSON.stringify(
      baseOptions,
    )}}/>
`;

export const errorWithMessageExample = `
    <Dropdown placeholder="Placeholder Text" error={true} errorMessage="The coupon code is not valid" options={${JSON.stringify(
      baseOptions,
    )}}/>
`;

export const withLabelExample = `
    <Dropdown placeholder="Placeholder Text" label="Label Text" options={${JSON.stringify(
      baseOptions,
    )}}/>
`;

export const sectionTitleExample = `
    <Dropdown placeholder="Placeholder Text" label="Label Text" options={${JSON.stringify(
      optionsWithSections,
    )}}/>
`;

export const withSubtitlesExample = `
    <Dropdown placeholder="Placeholder Text" options={${JSON.stringify(
      optionsWithSubtitle,
    )}} />
`;

export const withIconsExample = `
    <Dropdown placeholder="Placeholder Text" options={${optionsWithIcon}} />
`;

export const withIconsAndSubtitlesExample = `
    <Dropdown placeholder="Placeholder Text" options={${optionsWithIconAndSubtitles}} />
`;

export const minWidthExample = `
    <div style={{width: '0px'}}>
        <Dropdown options={${JSON.stringify(
          numberOptions,
        )}} initialSelectedId={'0'}/>
    </div>
`;

export const mobileExample = `
    <ExampleWithContextProps mobile={true}>
        <Dropdown />
    </ExampleWithContextProps>
`;
