import Browser from 'webextension-polyfill'

export const DEFAULT_SETTINGS = {
  exampleSetting: false,
  exampleSetting2: false,
}

export const initializeStorage = async () => {
  const storage = await Browser.storage.local.get(['settings', 'data'])

  const updates: Record<string, any> = {}

  if (!storage.settings) {
    updates['settings'] = DEFAULT_SETTINGS
  }

  if (Object.keys(updates).length > 0) {
    await Browser.storage.local.set(updates)
  }
}
