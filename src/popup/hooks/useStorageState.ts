import { useCallback, useEffect, useState } from 'react'
import Browser, { Storage } from 'webextension-polyfill'

export const useStorageState = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(defaultValue)

  useEffect(() => {
    Browser.storage.local.get([key]).then((result) => {
      setValue((result[key] as T) ?? defaultValue)
    })

    const listener = (changes: { [key: string]: Storage.StorageChange }) => {
      if (changes[key]) {
        const oldValue = changes[key].oldValue
        const newValue = changes[key].newValue
        console.log(`${JSON.stringify(oldValue)} -> ${JSON.stringify(newValue)}`)
        setValue((changes[key].newValue as T) ?? defaultValue)
      }
    }

    Browser.storage.local.onChanged.addListener(listener)
    return () => Browser.storage.local.onChanged.removeListener(listener)
  }, [key])

  const updateValue = useCallback(
    (newValue: T) => {
      Browser.storage.local.set({ [key]: newValue })
    },
    [key]
  )

  return [value, updateValue] as const
}
