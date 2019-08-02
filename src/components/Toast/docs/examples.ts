import { TOAST_SKIN } from '../Toast';

export const importExample = `import { Toast, TOAST_SKIN } from 'wix-ui-tpa/Toast';`;

export const example = Object.keys(TOAST_SKIN).reduce(
  (acc, skin) => {
    return {
      ...acc,
      desktop: {
        ...acc.desktop,
        [skin]: getToast(skin),
      },
      mobile: {
        ...acc.mobile,
        [skin]: getToast(skin, true),
      },
    };
  },
  { desktop: {}, mobile: {} },
);

function getToast(skin, isMobile?): string {
  const message = getMessage(skin);
  const toast = `
      <Toast skin="${skin}">${message}</Toast>
      <br/>
      <Toast skin="${skin}" shouldShowCloseButton>${message}</Toast>
      <br/>
      <Toast skin="${skin}">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.
      </Toast>
    `;

  return isMobile
    ? `<ExampleWithContextProps mobile="true">${toast}</ExampleWithContextProps>`
    : `<>${toast}</>`;
}

function getMessage(skin: TOAST_SKIN): string {
  switch (skin) {
    case TOAST_SKIN.success:
      return '24 photos were uploaded successfully.';
      break;
    case TOAST_SKIN.error:
      return 'These files exceed the upload limit.';
      break;
    case TOAST_SKIN.status:
      return 'Uploading...';
    default:
      return '';
  }
}
