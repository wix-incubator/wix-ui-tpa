import * as React from 'react';
import classnames from 'classnames';
import { TPAComponentProps } from '../../types';
import { st, classes } from './BoxSelection.st.css';
import { Option as BoxSelectionOption } from './Option';

export enum BoxSize {
  small = 'small',
  xLarge = 'large',
}

export interface BoxSelectionProps extends TPAComponentProps {
  /**
   * Is used to group options together
   */
  name: string;
  /**
   * size variations
   */
  size?: BoxSize;
  /**
   * Used for SR labelling the group of options
   */
  'aria-label'?: string;
  /**
   * Used for SR labelling the group of options (by id)
   */
  'aria-labelledby'?: string;
  /**
   * The onChange callback
   */
  onChange?({ id: string }): void;
  /**
   * The Box selected childrens
   */
  children?: React.ReactNode;
  /**
   * Layout boxes vertically
   */
  vertical?: boolean;
  /**
   * Display inline
   */
  inline?: boolean;
}

interface DefaultProps {
  size: BoxSize;
}

/** The box selection is used to give the user to select single or multiple boxes. */
export class BoxSelection extends React.Component<BoxSelectionProps> {
  static displayName = 'BoxSelection';
  static Option = BoxSelectionOption;

  static defaultProps: DefaultProps = {
    size: BoxSize.xLarge,
  };

  render() {
    const {
      className,
      children,
      size,
      name,
      onChange,
      vertical,
      inline,
      ['aria-label']: ariaLabel,
      ['aria-labelledby']: ariaLabelledBy,
    } = this.props;

    return (
      <div
        className={st(
          classes.root,
          {},
          classnames(className, {
            [classes.vertical]: vertical,
            [classes.inline]: inline,
          }),
        )}
        data-hook={this.props['data-hook']}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
      >
        {React.Children.map(
          children,
          (child: BoxSelectionOption, key: number) => {
            return (
              React.isValidElement(child) &&
              React.cloneElement(child, {
                key,
                name,
                size,
                onChange,
                vertical,
              })
            );
          },
        )}
      </div>
    );
  }
}
