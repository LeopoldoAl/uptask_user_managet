import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 className='text-6xl text-blue-500'>Hello World!</h1>
  </StrictMode>,
)
