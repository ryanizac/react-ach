export interface IUseLocalStorageProps<Type extends object, Model extends any> {
  key: string
  validator: keyof Type
  empty: Type
  model: (v: Type) => Model
}
