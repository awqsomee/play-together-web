import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import Layout from 'antd/es/layout/layout'
import { Row, Card, Divider } from 'antd'
import { useParams } from 'react-router-dom'
import { IGame } from '../models/IGame'
import { localhost } from '../store/serverAdress'
import PlayerCard from '../components/PlayerCard'

const Game: FC = () => {
  const { title } = useParams()
  const [game, setGame] = useState<IGame>({} as IGame)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const game = await axios.get(`${localhost}/games/${title}`)
    setGame(game.data)
  }

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
          </>
        </Card>
      </Row>
    </Layout>
  )
}

export default Game
