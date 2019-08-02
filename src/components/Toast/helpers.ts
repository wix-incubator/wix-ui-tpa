import { TOAST_SKIN } from './Toast';

export function getMessage(skin: TOAST_SKIN): string {
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
