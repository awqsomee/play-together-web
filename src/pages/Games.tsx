import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'
import Layout from 'antd/es/layout/layout'
import { Card, Col, Row, Typography } from 'antd'
import { IGame } from '../models/IGame'
import { localhost } from '../store/serverAdress'
import GameCard from '../components/GameCard'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setGames } from '../store/games/games'
import { setIsSearching } from '../store/search/search'

const Games: FC = () => {
  const { games } = useAppSelector((state) => state.gamesToolkit)
  const { isSearching } = useAppSelector((state) => state.searchToolkit)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isSearching) dispatch(setIsSearching(false))
    else fetchGames()
  }, [])

  const fetchGames = async () => {
    const { data } = await axios.get(`${localhost}/api/games`)
    dispatch(setGames(data))
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

export default Games
