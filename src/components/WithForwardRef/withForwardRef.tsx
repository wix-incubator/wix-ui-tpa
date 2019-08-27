import * as React from 'React';

export interface WithForwardRefProps<T extends HTMLElement = HTMLElement> {
  innerRef?: React.Ref<T>;
}

export function withForwardRef<T extends HTMLElement, P = {}>(
  Component: React.ComponentType<P>,
) {
  return React.forwardRef<T, P>((props, ref) => (
    <Component innerRef={ref} {...props} />
  ));
}
