import Browser from 'webextension-polyfill'

export const DEFAULT_SETTINGS = {
  exampleSetting: false,
  exampleSetting2: false,
}

export type Settings = typeof DEFAULT_SETTINGS

type StoredSettings = Partial<Settings>

const settingsChanged = (current: StoredSettings | undefined, next: Settings) => {
  if (!current) {
    return true
  }

  return (Object.keys(next) as Array<keyof Settings>).some((key) => current[key] !== next[key])
}

export const initializeStorage = async () => {
  const storage = await Browser.storage.local.get(['settings'])
  const currentSettings = storage.settings as StoredSettings | undefined
  const settings = {
    ...DEFAULT_SETTINGS,
    ...currentSettings,
  }

  if (settingsChanged(currentSettings, settings)) {
    await Browser.storage.local.set({ settings })
  }
}
