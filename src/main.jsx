import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Quando importamos esse DOM, estamos integrando o React 
//para funcionar no ambiente WEB.

import {App} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
