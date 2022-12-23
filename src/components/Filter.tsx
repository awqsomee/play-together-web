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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        width: '99vw',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100vw',
          justifyContent: 'center',
          margin: '10px',
          height: '90px',
        }}
      >
        <Row
          className="hideScroll"
          style={{
            width: '93vw',
            overflowX: 'scroll',
            // overflowY: 'hidden',
            flexWrap: 'nowrap',
          }}
          gutter={[16, 0]}
        >
          {games.map((game) => (
            <GameButton key={game.title} game={game} />
          ))}
        </Row>
      </div>
    </div>
  )
}

export default Filter
