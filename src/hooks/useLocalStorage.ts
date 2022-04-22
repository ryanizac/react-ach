import GenericModel from '@/models/GenericModel'
import { useEffect, useState } from 'react'
import { IUseLocalStorageProps } from './IUseLocalStorage'

export default function useLocalStorage<
  Base extends object,
  Model extends GenericModel
>({ key, model, validator, ...props }: IUseLocalStorageProps<Base, Model>) {
  const empty = model(props.empty)
  const [genericState, setGenericState] = useState<Model>(empty)

  function writeStorage(data: Model) {
    const strData: string = JSON.stringify(data)
    localStorage.setItem(key, strData)
    setGenericState(data)
  }

  function readStorage() {
    const currentStr = localStorage.getItem(key)
    if (!!currentStr) {
      const currentData: Base = JSON.parse(currentStr)
      const data: Model = model(currentData)
      if (validator in data) setGenericState(data)
    }
  }

  function updateStorage(partialData: Partial<Base>) {
    const currentStr = localStorage.getItem(key)
    if (!!currentStr) {
      const currentData: Base = JSON.parse(currentStr)
      const data: Model = model({ ...currentData, ...partialData })
      writeStorage(data)
    }
  }

  function deleteStorage() {
    localStorage.removeItem(key)
    setGenericState(empty)
  }

  useEffect(() => readStorage(), [])

  return {
    genericState,
    writeStorage,
    updateStorage,
    readStorage,
    deleteStorage,
  }
}
