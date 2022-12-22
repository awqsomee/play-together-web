import React, { FC } from 'react'
import './App.css'
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'
import Layout from 'antd/es/layout'
import { ConfigProvider } from 'antd'
import { setUser } from './store/auth/auth'
import { useAppDispatch } from './store/hooks'

const App: FC = () => {
  // const { isAuth, user } = useAppSelector((state) => state.userToolkit)
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

  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   if (localStorage.getItem('auth')){
  //     dispatch(setUser())
  //   }
  // }, [])

  return (
    <ConfigProvider theme={lightTheme}>
      <Layout>
        <Navbar />
        <Layout.Content>
          <AppRouter />
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  )
}

export default App
