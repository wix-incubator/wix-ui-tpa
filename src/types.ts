export interface TPAComponentProps {
  /**
   * Class Name to pass to the root of the component
   */
  className?: string;
  /**
   * A data-hook attribute to pass to the root of the component
   */
  'data-hook'?: string;
}

export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
