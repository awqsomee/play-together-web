import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import Layout from 'antd/es/layout/layout'
import { Row, Card, Divider } from 'antd'
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
    fetchData()
  }, [])

  useEffect(() => {
    if (!isAuth) {
      setIsSearching(false)
      setIsPlaying(false)
    }
  }, [isAuth])

  const fetchData = async () => {
    const response = await axios.get(`${localhost}/games/${title}`)
    const game = response.data
    if (isAuth) {
      const { data } = await axios.get<IPlayer>(`${localhost}/users/${user.username}/playing`)
      if (data.games.includes(game.title)) setIsPlaying(true)
      if (data.searches.includes(game.title)) setIsSearching(true)
    }
    setGame(game)
  }

  const playGame = async () => {
    await axios.post(
      `${localhost}/users/play`,
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
      `${localhost}/users/search`,
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
          style={{ width: 1280, height: 720, display: 'flex', justifyContent: 'center' }}
        >
          <>
            <Divider style={{ width: 1200 }}>{game.title}</Divider>
            {game?.description}
            <Divider />
            {game?.cover}
            <Divider />
            {game?.releaseDate}
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
            <Button
              onClick={() => {
                isAuth ? playGame() : navigate('/login')
              }}
              type={isPlaying ? 'default' : 'primary'}
              size="large"
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
          </>
        </Card>
      </Row>
    </Layout>
  )
}

export default Game
