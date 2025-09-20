import './popup.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { DEFAULT_SETTINGS } from '../storage'
import { useStorageState } from './hooks/useStorageState'

type Settings = typeof DEFAULT_SETTINGS

const Popup = () => {
  const [settings, setSettings] = useStorageState<Settings>('settings', DEFAULT_SETTINGS)

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={settings.exampleSetting}
          onChange={(e) => setSettings({ ...settings, exampleSetting: e.target.checked })}
        />
      </label>

      <label>
        <input
          type="checkbox"
          checked={settings.exampleSetting2}
          onChange={(e) => setSettings({ ...settings, exampleSetting2: e.target.checked })}
        />
      </label>
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.createRoot(root).render(<Popup />)
