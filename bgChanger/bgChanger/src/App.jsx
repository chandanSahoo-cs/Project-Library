import { useState } from 'react'
import './App.css'
import ContextProvider from './context/userContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'
function App() {

  return (
    <ContextProvider>
      <Login/>
      <Profile/>
    </ContextProvider>
  )
}

export default App
