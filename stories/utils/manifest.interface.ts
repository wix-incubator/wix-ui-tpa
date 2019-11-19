export enum VariableType {
  color = 'color',
  font = 'font',
  number = 'number',
}

export interface IComponentManifest {
  entries: IManifestEntries;
  stylable: IManifestStylable;
}

export interface IManifestEntries {
  component: IManifestComponentEntries;
  style?: IManifestStyleEntries;
}

export interface IManifestComponentEntries {
  module: string;
  exportName: string;
}

export interface IManifestStyleEntries {
  path: string;
}

export interface IManifestStylable {
  variables: IVariableManifest[];
}

export interface IVariableManifest {
  name: string;
  type: VariableType;
  defaultValue: string;
  description: string;
}
