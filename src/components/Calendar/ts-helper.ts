export type AllPropsRequired<T> = {
  [P in keyof Required<T>]: T[P];
};
