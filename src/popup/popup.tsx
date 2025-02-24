import React from 'react'
import ReactDOM from 'react-dom/client'
import './popup.css'

const Popup = () => {
  return (
    <div>
      <img src="icon.png" alt="icon" />
      <p>Hello World</p>
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.createRoot(root).render(<Popup />)
