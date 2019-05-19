const enum KEY_CODES {
  ENTER = 13,
  SPACEBAR = 32,
  ARROW_UP = 38,
  ARROW_DOWN = 40,
  ARROW_RIGHT = 39,
  ARROW_LEFT = 37,
}

export function isSelectKey(keyCode: number) {
  switch (keyCode) {
    case KEY_CODES.ENTER:
    case KEY_CODES.SPACEBAR:
      return true;
    default:
      return false;
  }
}
