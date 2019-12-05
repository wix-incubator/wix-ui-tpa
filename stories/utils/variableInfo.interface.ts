export enum VariableType {
  color = 'color',
  font = 'font',
  number = 'number',
}

export interface IVariableManifest {
  name: string;
  type: VariableType;
  defaultValue: string;
  description: string;
  min?: string;
  max?: string;
  unit?: string;
}
