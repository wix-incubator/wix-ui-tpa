import { DROPDOWN_ALIGNMENT } from '../Dropdown';

import {
  simpleOptions,
  numberOptions,
  optionsWithIcon,
  optionsWithIconAndSubtitles,
  optionsWithSections,
  optionsWithSubtitle,
} from '../helpers';

const wrap = example => `
  <div>
    <div>Desktop:</div>
      ${example}
      <br/>
      <div>Mobile:</div>
      <ExampleWithContextProps mobile={true}>
        ${example}
      </ExampleWithContextProps>
  </div>
`;

export const simpleExample = wrap(`
  <Dropdown upgrade placeholder="Placeholder Text" options={${JSON.stringify(
    simpleOptions,
  )}} />
`);

export const simpleNativeExample = `
    <ExampleWithContextProps mobile={true}>
        <Dropdown upgrade placeholder="Placeholder Text" mobileNativeSelect options={${JSON.stringify(
          simpleOptions,
        )}} />
    </ExampleWithContextProps>
`;

export const disabledExample = `
    <Dropdown upgrade placeholder="Placeholder Text" disabled options={${JSON.stringify(
      simpleOptions,
    )}}/>
`;

export const alignmentExample = `
    <Dropdown upgrade placeholder="Placeholder Text" options={${JSON.stringify(
      simpleOptions,
    )}} alignment="${DROPDOWN_ALIGNMENT.center}" label="Label Text" />
`;

export const errorExample = `
    <Dropdown upgrade placeholder="Placeholder Text" error={true} options={${JSON.stringify(
      simpleOptions,
    )}}/>
`;

export const errorWithMessageExample = `
    <Dropdown upgrade placeholder="Placeholder Text" error={true} errorMessage="The coupon code is not valid" options={${JSON.stringify(
      simpleOptions,
    )}}/>
`;

export const withLabelExample = wrap(`
    <Dropdown upgrade placeholder="Placeholder Text" label="Label Text" options={${JSON.stringify(
      simpleOptions,
    )}}/>
`);

export const sectionTitleExample = `
    <Dropdown upgrade placeholder="Placeholder Text" label="Label Text" options={${JSON.stringify(
      optionsWithSections,
    )}}/>
`;

export const withSubtitlesExample = `
    <Dropdown upgrade placeholder="Placeholder Text" options={${JSON.stringify(
      optionsWithSubtitle,
    )}} />
`;

export const withIconsExample = `
    <Dropdown upgrade placeholder="Placeholder Text" options={${optionsWithIcon}} />
`;

export const withIconsAndSubtitlesExample = `
    <Dropdown upgrade placeholder="Placeholder Text" options={${optionsWithIconAndSubtitles}} />
`;

export const minWidthExample = `
    <div style={{width: '0px'}}>
        <Dropdown upgrade options={${JSON.stringify(
          numberOptions,
        )}} initialSelectedId={'0'}/>
    </div>
`;

export const mobileExample = `
    <ExampleWithContextProps mobile={true}>
        {simpleExample}
    </ExampleWithContextProps>
`;
