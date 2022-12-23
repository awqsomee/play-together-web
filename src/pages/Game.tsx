import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import Layout from 'antd/es/layout/layout'
import { Row, Card, Divider, Typography } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { IGame } from '../models/IGame'
import { localhost } from '../store/serverAdress'
import PlayerCard from '../components/PlayerCard'
import Button from 'antd/es/button'
import { useAppSelector } from '../store/hooks'
import { IPlayer } from '../models/IPlayer'

const Game: FC = () => {
  const { title } = useParams()
  const [game, setGame] = useState<IGame>({} as IGame)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { isAuth, user } = useAppSelector((state) => state.authToolkit)

  useEffect(() => {
    setIsLoading(true)
    fetchData().finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    if (!isAuth) {
      setIsSearching(false)
      setIsPlaying(false)
    }
  }, [isAuth])

  const fetchData = async () => {
    const response = await axios.get(`${localhost}/api/games/${title}`)
    const game = response.data
    if (isAuth) {
      const { data } = await axios.get<IPlayer>(`${localhost}/api/users/${user.username}/playing`)
      if (data.games.includes(game.title)) setIsPlaying(true)
      if (data.searches.includes(game.title)) setIsSearching(true)
    }
    setGame(game)
  }

  const playGame = async () => {
    await axios.post(
      `${localhost}/api/users/play`,
      { id: game.id, playing: !isPlaying },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth')}`,
        },
      }
    )
    if (isPlaying) setIsSearching(false)
    setIsPlaying(!isPlaying)
  }

  const searchForTeam = async () => {
    await axios.post(
      `${localhost}/api/users/searchteam`,
      { id: game.id, searching: !isSearching },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth')}`,
        },
      }
    )
    if (!isSearching) setIsPlaying(true)
    setIsSearching(!isSearching)
  }

  const navigate = useNavigate()

  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card
          // title={title}
          style={{ width: 1280, minHeight: '720px', margin: '40px', display: 'flex', justifyContent: 'center' }}
          loading={isLoading}
        >
          <>
            <Divider style={{ width: 1200 }}>
              <Typography.Title>{game.title}</Typography.Title>
            </Divider>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <>
                <div>{game?.cover ? <img width={348} src={`${localhost}/${game.cover}`} /> : <></>}</div>
                <>
                  <div style={{ margin: '0px 40px', display: 'flex', flexDirection: 'column' }}>
                    {game?.description}
                    <div style={{ margin: '40px 0px' }}>
                      <Button
                        onClick={() => {
                          isAuth ? playGame() : navigate('/login')
                        }}
                        type={isPlaying ? 'default' : 'primary'}
                        size="large"
                        style={{ margin: '0px 20px' }}
                      >
                        Play Game
                      </Button>
                      <Button
                        onClick={() => {
                          isAuth ? searchForTeam() : navigate('/login')
                        }}
                        type={isSearching ? 'default' : 'primary'}
                        size="large"
                      >
                        Search for Team
                      </Button>
                    </div>
                  </div>
                </>
              </>
            </div>

            <Divider />
            <Typography.Title level={3}>
              {game?.releaseDate ? (
                'Release Date: ' +
                new Date(Date.parse(game?.releaseDate.toString())).toLocaleDateString('ru', {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                })
              ) : (
                <></>
              )}
            </Typography.Title>
            <Divider>Players</Divider>
            <Row justify="center" align="middle">
              <div className="site-card-wrapper w60">
                <Row gutter={[16, 24]}>
                  {game?.users ? game.users.map((user) => <PlayerCard key={user.username} player={user} />) : <></>}
                </Row>
              </div>
            </Row>
            <Divider>Seekers</Divider>
            <Row justify="center" align="middle">
              <div className="site-card-wrapper w60">
                <Row gutter={[16, 24]}>
                  {game?.seekers ? (
                    game.seekers.map((seeker) => <PlayerCard key={seeker.username} player={seeker} />)
                  ) : (
                    <></>
                  )}
                </Row>
              </div>
            </Row>
          </>
        </Card>
      </Row>
    </Layout>
  )
}

export default Game
