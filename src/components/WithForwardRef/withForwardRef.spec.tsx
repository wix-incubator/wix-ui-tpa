import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import { TextArea } from '../TextArea/TextArea';
import { textAreaDriverFactory } from '../TextArea/TextArea.driver';

import { Button } from '../Button/Button';
import { buttonDriverFactory } from '../Button/Button.driver';

describe('withForwardRef', () => {
  it('forwards refs for TextArea component', () => {
    const $textArea = React.createRef<HTMLTextAreaElement>();

    createUniDriverFactory(textAreaDriverFactory)(
      <TextArea
        ref={$textArea}
        ariaLabel={'test'}
        value={'Test Text'}
        onChange={jest.fn()}
      />,
    );

    expect($textArea.current).toBeDefined();
    expect($textArea.current).toBeInstanceOf(HTMLTextAreaElement);
    expect($textArea.current.value).toEqual('Test Text');
  });

  it('forwards refs for Button component', () => {
    const $button = React.createRef<HTMLButtonElement>();

    createUniDriverFactory(buttonDriverFactory)(<Button ref={$button} />);

    expect($button.current).toBeDefined();

    $button.current.focus();
    expect(document.activeElement).toEqual(
      ($button.current as any).wrappedComponentRef.innerComponentRef,
    );
  });
});
