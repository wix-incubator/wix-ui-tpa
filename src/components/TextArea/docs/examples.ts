export const importExample = `import { TextArea } from 'wix-ui-tpa/TextArea';`;

export const example = `
<TextArea
    ariaLabel="test"
    value=""
    placeholder="Placeholder example"
 />
`;

export const exampleWithText = `
<TextArea
    ariaLabel="test"
    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    placeholder="Text placeholder"
 />
`;

export const errorWithDescription = `
<TextArea
    ariaLabel="test"
    error
    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    placeholder="Text placeholder"
    errorDescription="Error description"
 />
`;

export const errorWithoutDescription = `
<TextArea
    ariaLabel="test"
    error
    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    placeholder="Text placeholder"
 />
`;

export const successExample = `
<TextArea
    ariaLabel="test"
    success
    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    placeholder="Text placeholder"
 />
`;

export const disabledExample = `
<TextArea
    disabled
    ariaLabel="test"
    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    placeholder="Text placeholder"
 />
`;

export const lineTheme = `
<TextArea
    theme="line"
    ariaLabel="test"
    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    placeholder="Text placeholder"
 />
`;

export const lineThemeWithError = `
<TextArea
    error
    theme="line"
    ariaLabel="test"
    placeholder="Text placeholder"
    errorDescription="ErrorDescription"
    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
 />
`;

export const boxTheme = `
<TextArea
    ariaLabel="test"
    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    placeholder="Text placeholder"
    theme="box"
 />
`;
