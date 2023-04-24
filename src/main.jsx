import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Header } from './components/header'
import { Footer } from './components/footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
)
