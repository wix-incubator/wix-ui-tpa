import * as React from 'react';
import { CalendarComponent } from './CalendarComponent';

export class CustomizableComponent<
  P = null,
  S = null
> extends CalendarComponent<P, S> {
  defaultElements: { [type: string]: () => React.ReactNode } = {};

  isNodeOfType = (node: React.ReactNode, type: string | string[]) => {
    const assumedElement = node as React.ReactElement<any, any>;
    type = typeof type === 'string' ? [type] : type;

    return Boolean(
      assumedElement.type && type.includes(assumedElement.type.displayName),
    );
  };

  nodeHasType = (node: React.ReactNode, type: string | string[]) => {
    if (this.isNodeOfType(node, type)) {
      return true;
    }

    const assumedElement = node as React.ReactElement<any, any>;

    if (assumedElement.props && assumedElement.props.children) {
      return Boolean(
        React.Children.toArray(assumedElement.props.children).find(grandChild =>
          this.nodeHasType(grandChild, type),
        ),
      );
    }

    return false;
  };

  getTypedChildren = () => {
    const types = Object.keys(this.defaultElements);

    return React.Children.toArray(this.props.children).map(node => ({
      node,
      types: types.filter(type => this.nodeHasType(node, type) || null),
    }));
  };

  getTypedDefaultChildren = (
    typedChildren: {
      node: React.ReactNode;
      types: string[];
    }[],
  ) =>
    Object.entries(this.defaultElements).map(([type, renderer]) => ({
      type,
      renderer: typedChildren.find(child => child.types.includes(type))
        ? () => null
        : renderer,
    }));

  getResolvedChildren = () => {
    const typedChildren = this.getTypedChildren();
    const typedDefaultChildren = this.getTypedDefaultChildren(typedChildren);

    let resolvedChildren: React.ReactNode[] = [];

    typedChildren.forEach(child => {
      if (!child.types.length) {
        resolvedChildren.push(child.node);
        return;
      }

      const defaultChildIndex = typedDefaultChildren.findIndex(defaultChild =>
        child.types.includes(defaultChild.type),
      );

      if (defaultChildIndex > 0) {
        resolvedChildren = [
          ...resolvedChildren,
          ...typedDefaultChildren
            .splice(0, defaultChildIndex)
            .map(defaultChild => defaultChild.renderer()),
        ];
      }

      resolvedChildren.push(child.node);
    });

    if (typedDefaultChildren.length) {
      resolvedChildren = [
        ...resolvedChildren,
        ...typedDefaultChildren.map(defaultChild => defaultChild.renderer()),
      ];
    }

    return resolvedChildren;
  };
}
