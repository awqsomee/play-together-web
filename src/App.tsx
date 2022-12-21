import React, { FC } from 'react'
import logo from './logo.svg'
import './App.css'
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'
import { useAppSelector } from './store/hooks'

const App: FC = () => {
  const { isAuth } = useAppSelector((state) => state.userToolkit)
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
