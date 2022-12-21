import { Button, Input, Space, Layout, Typography } from 'antd'
import { Row } from 'antd/es/grid'
import {} from 'antd/es/layout/layout'
import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import { logout } from '../store/auth/auth'
const { Search } = Input
const { Header } = Layout
const { Title } = Typography
const Navbar: FC = () => {
  const dispatch = useDispatch()
  const { isAuth, user } = useAppSelector((state) => state.authToolkit)
  const navigate = useNavigate()
  return (
    <Layout>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', background: 'white' }}>
        <Row justify="space-between" align="middle">
          <Button
            onClick={() => {
              navigate('/')
            }}
            type="text"
            size="large"
          >
            LOGO
          </Button>
          <Button
            onClick={() => {
              navigate('/games')
            }}
            type="text"
            size="large"
          >
            Games
          </Button>
          <Button
            onClick={() => {
              navigate('/players')
            }}
            type="text"
            size="large"
          >
            Players
          </Button>
          <Search placeholder="Search" allowClear enterButton style={{ width: 800, alignSelf: 'center' }}></Search>
          {isAuth ? (
            <div>
              <Space direction="horizontal">
                <Button
                  onClick={() => {
                    navigate('/acc')
                  }}
                  type="text"
                  size="large"
                >
                  {user.username}
                </Button>
                <Title level={5}></Title>
                <Button
                  onClick={() => {
                    dispatch(logout())
                  }}
                  size="large"
                >
                  Log Out
                </Button>
              </Space>
            </div>
          ) : (
            <div>
              <Space direction="horizontal">
                <Button
                  onClick={() => {
                    navigate('/login')
                  }}
                  size="large"
                >
                  Log In
                </Button>
                <Button
                  onClick={() => {
                    navigate('/reg')
                  }}
                  type="primary"
                  size="large"
                >
                  Sign Up
                </Button>
              </Space>
            </div>
          )}
        </Row>
      </Header>
    </Layout>
  )
}

export default Navbar
