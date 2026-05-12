import './popup.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { DEFAULT_SETTINGS, Settings } from '../storage'
import { useStorageState } from './hooks/useStorageState'

const Popup = () => {
  const [settings, setSettings] = useStorageState<Settings>('settings', DEFAULT_SETTINGS)

  const updateSetting = (key: keyof Settings, checked: boolean) => {
    setSettings({ ...settings, [key]: checked })
  }

  return (
    <main className="popup">
      <header>
        <h1>Extension Starter</h1>
      </header>

      <label className="setting">
        <input
          type="checkbox"
          checked={settings.exampleSetting}
          onChange={(e) => updateSetting('exampleSetting', e.target.checked)}
        />
        <span>Enable primary setting</span>
      </label>

      <label className="setting">
        <input
          type="checkbox"
          checked={settings.exampleSetting2}
          onChange={(e) => updateSetting('exampleSetting2', e.target.checked)}
        />
        <span>Enable secondary setting</span>
      </label>
    </main>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.createRoot(root).render(<Popup />)
