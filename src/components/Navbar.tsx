import { Button, Input, Space, Layout, Typography, Divider } from 'antd'
import { Row } from 'antd/es/grid'
import {} from 'antd/es/layout/layout'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { logout } from '../store/auth/auth'
import { setIsSearching, setQuery } from '../store/search/search'
import axios from 'axios'
import { localhost } from '../store/serverAdress'
import { setGames } from '../store/games/games'
const { Search } = Input
const { Header } = Layout
const { Title } = Typography
const Navbar: FC = () => {
  const dispatch = useAppDispatch()
  const { isAuth, user } = useAppSelector((state) => state.authToolkit)
  const { searchQuery } = useAppSelector((state) => state.searchToolkit)
  const navigate = useNavigate()

  const searchHandler = async () => {
    dispatch(setIsSearching(true))
    dispatch(setQuery(''))
    const { data } = await axios.get(`${localhost}/api/games/search?q=${searchQuery}`)
    navigate('/games')
    dispatch(setGames(data))
  }

  return (
    <Layout>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', background: 'white' }}>
        <Row justify="space-between" align="middle">
          <div>
            <Button
              onClick={() => {
                navigate('/')
              }}
              type="text"
              size="large"
              style={{ fontWeight: 'bold' }}
            >
              {/* LOGO */}
              PlayTogether
            </Button>
            <Divider type="vertical" />
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
          </div>
          <Search
            placeholder="Search"
            allowClear
            size="large"
            enterButton
            value={searchQuery}
            onChange={(event) => dispatch(setQuery(event.target.value))}
            onPressEnter={async (event) => searchHandler()}
            onSearch={(event) => searchHandler()}
            style={{ width: 800, alignSelf: 'center' }}
          ></Search>
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
                    // navigate('/')
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
