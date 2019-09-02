import * as React from 'react';

export interface WithForwardRefProps<T extends HTMLElement = HTMLElement> {
  innerRef?: React.Ref<T>;
}

export function withForwardRef<T extends HTMLElement, P = {}>(
  Component: React.ComponentType<P>,
) {
  forwardRef.displayName = `withForwardRef(${Component.displayName ||
    Component.name})`;

  forwardRef.WrappedComponent = Component;

  function forwardRef(props: P, ref: React.Ref<T>) {
    return <Component {...props} innerRef={ref} />;
  }

  return React.forwardRef<T, P>(forwardRef);
}
