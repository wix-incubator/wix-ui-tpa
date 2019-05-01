import { KEY_CODES } from './constants';

// TODO: rename
export function isOperationKey(keyCode: number) {
  switch (keyCode) {
    case KEY_CODES.ENTER:
    case KEY_CODES.SPACEBAR:
      return true;
    default:
      return false;
  }
}
