export enum KEY_CODES {
  Enter = 13,
  Spacebar = 32,
  ArrowUp = 38,
  ArrowDown = 40,
  ArrowRight = 39,
  ArrowLeft = 37,
}

export function isSelectKey(keyCode: number) {
  switch (keyCode) {
    case KEY_CODES.Enter:
    case KEY_CODES.Spacebar:
      return true;
    default:
      return false;
  }
}
