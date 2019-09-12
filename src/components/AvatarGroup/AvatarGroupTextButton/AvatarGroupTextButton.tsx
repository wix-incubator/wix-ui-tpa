import {
  TEXT_BUTTON_PRIORITY,
  TextButton,
  TextButtonProps,
} from '../../TextButton';
import * as React from 'react';

export class AvatarGroupTextButton extends TextButton {
  static defaultProps: TextButtonProps = {
    priority: TEXT_BUTTON_PRIORITY.secondary,
  };
}
