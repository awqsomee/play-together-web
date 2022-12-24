import React, { FC, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Card, Col, Layout, Row, Typography } from 'antd'
import GameCard from '../components/GameCard'
import { useAppSelector } from '../store/hooks'
import { localhost } from '../store/serverAdress'
import axios from 'axios'
import { IGame } from '../models/IGame'

const MyGames: FC = () => {
  const { user } = useAppSelector((state) => state.authToolkit)
  const [games, setGames] = useState<IGame[]>([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const { data } = await axios.get(`${localhost}/api/users/${user.username}`)
    console.log(data)

    setGames(data.games)
  }
  return (
    <Layout>
      <Row justify="center" className="h100" style={{ margin: '20px' }}>
        <div className="site-card-wrapper w75">
          {games.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Col className="gutter-row" span={6}>
                {/* <Row gutter={[16, 24]}> */}
                {games.map((game, index) => (index % 4 === 0 ? <GameCard key={game.title} game={game} /> : null))}
                {/* </Row> */}
              </Col>
              <Col className="gutter-row" span={6}>
                {/* <Row gutter={[16, 24]}> */}
                {games.map((game, index) => (index % 4 === 1 ? <GameCard key={game.title} game={game} /> : null))}
                {/* </Row> */}
              </Col>
              <Col className="gutter-row" span={6}>
                {/* <Row gutter={[16, 24]}> */}
                {games.map((game, index) => (index % 4 === 2 ? <GameCard key={game.title} game={game} /> : null))}
                {/* </Row> */}
              </Col>
              <Col className="gutter-row" span={6}>
                {/* <Row gutter={[16, 24]}> */}
                {games.map((game, index) => (index % 4 === 3 ? <GameCard key={game.title} game={game} /> : null))}
                {/* </Row> */}
              </Col>
            </div>
          ) : (
            <Row justify="center">
              <Card
                style={{
                  width: '1440px',
                  margin: '20px',
                  minHeight: '800px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography.Title>No games found</Typography.Title>
                </div>
              </Card>
            </Row>
          )}
        </div>
      </Row>
    </Layout>
  )
}

MyGames.propTypes = {}

export default MyGames
