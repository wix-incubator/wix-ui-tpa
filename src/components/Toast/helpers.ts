import { TOAST_SKIN } from './types';

export const skinMessages: { [skin in keyof typeof TOAST_SKIN]: string } = {
  [TOAST_SKIN.success]: '24 photos were uploaded successfully.',
  [TOAST_SKIN.error]: 'These files exceed the upload limit.',
  [TOAST_SKIN.status]: 'Uploading...',
};
