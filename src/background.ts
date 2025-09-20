import Browser from 'webextension-polyfill'
import { initializeStorage } from './storage'

Browser.runtime.onInstalled.addListener(() => {
  console.log('Extension installed')
})

initializeStorage()
