import * as React from 'react';

interface KEYBOARD_KEYS {
  Enter: string | number;
  Spacebar: string | number;
  ArrowUp: string | number;
  ArrowDown: string | number;
  ArrowRight: string | number;
  ArrowLeft: string | number;
}

export enum KEY_CODES {
  Enter = 13,
  Spacebar = 32,
  ArrowUp = 38,
  ArrowDown = 40,
  ArrowRight = 39,
  ArrowLeft = 37,
  Esc = 27,
}

export enum KEYS {
  Enter = 'Enter',
  Spacebar = ' ',
  ArrowUp = 'ArrowUp',
  ArrowUpIE = 'Up',
  ArrowDown = 'ArrowDown',
  ArrowDownIE = 'Down',
  ArrowRight = 'ArrowRight',
  ArrowRightIE = 'Right',
  ArrowLeft = 'ArrowLeft',
  ArrowLeftIE = 'Left',
}

const getCorrectKeys = (
  event: React.KeyboardEvent,
): { keys: KEYBOARD_KEYS; code: string | number } => {
  // tslint:disable-next-line
  if (event.which || event.keyCode) {
    // tslint:disable-next-line
    return { keys: KEY_CODES, code: event.keyCode || event.which };
  }
  if (event.key) {
    return { keys: KEYS, code: event.key };
  }
};

export function isSelectKey(event: React.KeyboardEvent) {
  const { code, keys } = getCorrectKeys(event);

  switch (code) {
    case keys.Enter:
    case keys.Spacebar:
      return true;
    default:
      return false;
  }
}
