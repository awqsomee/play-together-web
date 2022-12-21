import React, { FC } from 'react'
import Layout from 'antd/es/layout/layout'
import { Col, Card } from 'antd'
import { IPlayer } from '../models/IPlayer'
import { IGame } from '../models/IGame'
import { useNavigate } from 'react-router-dom'

interface IGameCard {
  game: IGame
}

const GameCard: FC<IGameCard> = (props: { game: IGame }) => {
  const navigate = useNavigate()
  return (
    <Col className="gutter-row" span={6}>
      <Card
        onClick={() => {
          navigate('/games/' + props.game.title)
        }}
        title={props.game.title}
        bordered={false}
      >
        Description
      </Card>
    </Col>
  )
}

export default GameCard
