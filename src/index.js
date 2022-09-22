import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

//до версии 18
// import reactDom from 'react-dom'
// reactDom.render(element, document.getElementById('root'))

//после версии 18
import { createRoot } from 'react-dom/client';

import App from './app'

const root = createRoot(document.getElementById('root'))

root.render(<App />)




