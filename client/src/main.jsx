import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {PostContextProvider} from './context/postContext.jsx'
import {LocationContextProvider} from './context/locationContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostContextProvider>
      <LocationContextProvider>
        <App />
      </LocationContextProvider>
    </PostContextProvider>
  </React.StrictMode>,
)
