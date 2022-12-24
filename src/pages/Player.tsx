import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import Layout from 'antd/es/layout/layout'
import { Row, Card, Divider, Col, Typography } from 'antd'
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
    const { data } = await axios.get(`${localhost}/api/users/${user}`)
    setPlayer(data)
  }
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card style={{ width: 1280, minHeight: 720, display: 'flex', justifyContent: 'center' }}>
          <>
            <Divider style={{ width: 1200 }}>
              <Typography.Title>{player.username}</Typography.Title>
            </Divider>
            <>{console.log(player)}</>
            {player.description ? (
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                {player.description}
              </div>
            ) : (
              <></>
            )}
            <Divider>Searches for Team</Divider>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Col className="gutter-row" span={6}>
                {/* <Row gutter={[16, 24]}> */}
                {player?.searches ? (
                  player.searches.map((game, index) =>
                    index % 4 === 0 ? <GameCard key={game.title} game={game} /> : null
                  )
                ) : (
                  <></>
                )}
                {/* </Row> */}
              </Col>
              <Col className="gutter-row" span={6}>
                {player?.searches ? (
                  player.searches.map((game, index) =>
                    index % 4 === 1 ? <GameCard key={game.title} game={game} /> : null
                  )
                ) : (
                  <></>
                )}
              </Col>
              <Col className="gutter-row" span={6}>
                {player?.searches ? (
                  player.searches.map((game, index) =>
                    index % 4 === 2 ? <GameCard key={game.title} game={game} /> : null
                  )
                ) : (
                  <></>
                )}
              </Col>
              <Col className="gutter-row" span={6}>
                {player?.searches ? (
                  player.searches.map((game, index) =>
                    index % 4 === 3 ? <GameCard key={game.title} game={game} /> : null
                  )
                ) : (
                  <></>
                )}
              </Col>
            </div>
            <Divider>Games</Divider>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Col className="gutter-row" span={6}>
                {/* <Row gutter={[16, 24]}> */}
                {player?.games ? (
                  player.games.map((game, index) =>
                    index % 4 === 0 ? <GameCard key={game.title} game={game} /> : null
                  )
                ) : (
                  <></>
                )}
                {/* </Row> */}
              </Col>
              <Col className="gutter-row" span={6}>
                {player?.games ? (
                  player.games.map((game, index) =>
                    index % 4 === 1 ? <GameCard key={game.title} game={game} /> : null
                  )
                ) : (
                  <></>
                )}
              </Col>
              <Col className="gutter-row" span={6}>
                {player?.games ? (
                  player.games.map((game, index) =>
                    index % 4 === 2 ? <GameCard key={game.title} game={game} /> : null
                  )
                ) : (
                  <></>
                )}
              </Col>
              <Col className="gutter-row" span={6}>
                {player?.games ? (
                  player.games.map((game, index) =>
                    index % 4 === 3 ? <GameCard key={game.title} game={game} /> : null
                  )
                ) : (
                  <></>
                )}
              </Col>
            </div>
          </>
        </Card>
      </Row>
    </Layout>
  )
}

export default Player
