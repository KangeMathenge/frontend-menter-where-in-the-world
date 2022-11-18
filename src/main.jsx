import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import {ThemeProvider} from './context/ThemeContext'
ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <ThemeProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
  </BrowserRouter>
)
