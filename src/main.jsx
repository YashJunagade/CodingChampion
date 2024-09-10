import React from 'react'
import ReactDOM from 'react-dom/client'
import AppWrapper from './App'
import { UserProvider } from './store/UserContext' // Adjust the path accordingly
import { ThemeProvider } from './store/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider>
        <AppWrapper />
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>
)
