import React, { FC, useEffect } from 'react'
import './App.css'
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'
import Layout from 'antd/es/layout'
import { ConfigProvider } from 'antd'
import { setIsLoading, setUser } from './store/auth/auth'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { authActions } from './store/auth/auth-actions'

const App: FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      console.log(localStorage.getItem('auth'))
      dispatch(setIsLoading(true))
      dispatch(authActions.auth()).finally(() => dispatch(setIsLoading(false)))
    } else dispatch(setIsLoading(false))
  }, [])

  const { isLoading } = useAppSelector((state) => state.authToolkit)
  // const auth = selectAuth(store.getState())
  const lightTheme = {
    token: {
      colorPrimary: '#7417a7',
      wireframe: false,
      colorError: '#fd3437',
      colorInfo: '#004fbd',
    },
  }

  const darkTheme = {
    token: {
      colorPrimary: '#7417a7',
      wireframe: false,
      colorError: '#fd3437',
      colorInfo: '#004fbd',
      colorBgBase: '#16111b',
    },
  }

  return (
    <>
      {!isLoading ? (
        <ConfigProvider theme={lightTheme}>
          <Layout>
            <Navbar />
            <Layout.Content>
              <AppRouter />
            </Layout.Content>
          </Layout>
        </ConfigProvider>
      ) : (
        <></>
      )}
    </>
  )
}

export default App
