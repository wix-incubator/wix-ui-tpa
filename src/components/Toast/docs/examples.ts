export const importExample = `import { Toast, TOAST_SKIN } from 'wix-ui-tpa/Toast';`;

export const successExample = `<Toast skin={TOAST_SKIN.success}>24 photos were uploaded successfully.</Toast>`;
export const errorExample = `<Toast skin={TOAST_SKIN.error}>These files exceed the upload limit.</Toast>`;
export const statusExample = `<Toast skin={TOAST_SKIN.status}>Uploading...</Toast>`;
export const multilineExample = `<Toast skin={TOAST_SKIN.error}>Sorry, we couldn't update this list. Please try again in a few minutes or contact our support team.</Toast>`;

export const mobileExample = `
<TPAComponentsProvider value={{mobile: true}}>
</TPAComponentsProvider>
`;
