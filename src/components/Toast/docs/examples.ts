import { skinMessages } from '../helpers';
import { TOAST_SKIN } from '../types';

export const example = Object.values(TOAST_SKIN).reduce(
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

function getToast(skin: TOAST_SKIN, isMobile?: boolean): string {
  const message = skinMessages[skin];
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
