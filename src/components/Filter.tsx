import React, { FC, useState } from 'react'
import Layout from 'antd/es/layout/layout'
import { Col, Card, Image, Row } from 'antd'
import { IPlayer } from '../models/IPlayer'
import { IGame } from '../models/IGame'
import { useNavigate } from 'react-router-dom'
import { localhost } from '../store/serverAdress'
import Meta from 'antd/es/card/Meta'
import GameButton from './GameButton'
import { useAppSelector } from '../store/hooks'

const Filter: FC = () => {
  const { games } = useAppSelector((state) => state.gamesToolkit)

  return (
    <Layout>
      <div
        className="site-card-wrapper w75"
        style={{ display: 'flex', width: '100vw', justifyContent: 'center', margin: '40px' }}
      >
        <Row style={{ width: '100vw' }} gutter={[16, 24]}>
          {games.map((game) => (
            <GameButton key={game.title} game={game} />
          ))}
        </Row>
      </div>
    </Layout>
  )
}

export default Filter
