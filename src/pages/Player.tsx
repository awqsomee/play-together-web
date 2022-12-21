import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import Layout from 'antd/es/layout/layout'
import { Row, Card, Divider } from 'antd'
import { useParams } from 'react-router-dom'
import { IPlayer } from '../models/IPlayer'
import { localhost } from '../store/serverAdress'
import GameCard from '../components/GameCard'

const Player: FC = () => {
  const { user } = useParams()
  const [player, setPlayer] = useState<IPlayer>({} as IPlayer)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const { data } = await axios.get(`${localhost}/users/${user}`)
    setPlayer(data)
  }
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card style={{ width: 1280, height: 720, display: 'flex', justifyContent: 'center' }}>
          <>
            <Divider style={{ width: 1200 }}>{player.username}</Divider>
            <Divider>Searches for Team</Divider>
            <Row justify="center" align="middle">
              <div className="site-card-wrapper w60">
                <Row gutter={[16, 24]}>
                  {player?.searches ? (
                    player.searches.map((search) => <GameCard key={search.title} game={search} />)
                  ) : (
                    <></>
                  )}
                </Row>
              </div>
            </Row>
            <Divider>Games</Divider>
            <Row justify="center" align="middle">
              <div className="site-card-wrapper w60">
                <Row gutter={[16, 24]}>
                  {player?.games ? player.games.map((game) => <GameCard key={game.title} game={game} />) : <></>}
                </Row>
              </div>
            </Row>
          </>
        </Card>
      </Row>
    </Layout>
  )
}

export default Player
