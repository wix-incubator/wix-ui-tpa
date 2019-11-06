import { bigContentString } from '../helpers';

const mobileDesktopWrapper = component => `
<div style={{display: 'flex'}}>
  <div>
    <span>Desktop:</span>
    ${component}
  </div>
  <div>
    <span>Mobile:</span>
    <ExampleWithContextProps mobile={true}>
      ${component}
    </ExampleWithContextProps>
  </div>
</div>
`;

export const maxHeightExample = mobileDesktopWrapper(`
   <ExampleModalApp>${bigContentString}</ExampleModalApp>
`);

export const minHeightExample = mobileDesktopWrapper(`<ExampleModalApp/>`);

export const rtlExample = `
<div dir="rtl">
<ExampleWithContextProps rtl={true}>
    ${maxHeightExample}
</ExampleWithContextProps>
</div>
`;

export const withoutCloseButtonExample = mobileDesktopWrapper(
  `<ExampleModalApp withCloseButton={false}/>`,
);
export const withoutBackgroundExample = mobileDesktopWrapper(
  `<ExampleModalApp withBackground={false}/>`,
);
export const inFullScreenExample = mobileDesktopWrapper(
  `<ExampleModalApp inFullScreen={true}>${bigContentString}</ExampleModalApp>`,
);
