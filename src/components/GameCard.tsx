import React, { FC } from 'react'
import Layout from 'antd/es/layout/layout'
import { Col, Card, Image } from 'antd'
import { IPlayer } from '../models/IPlayer'
import { IGame } from '../models/IGame'
import { useNavigate } from 'react-router-dom'
import { localhost } from '../store/serverAdress'
import Meta from 'antd/es/card/Meta'

interface IGameCard {
  game: IGame
}

const GameCard: FC<IGameCard> = (props: { game: IGame }) => {
  const navigate = useNavigate()
  const cover = `${localhost}/${props.game.cover}`

  return (
    <Col className="gutter-row" span={6}>
      <Card
        onClick={() => {
          navigate('/games/' + props.game.title)
        }}
        // title={props.game.title}
        cover={props.game.cover ? <img width={348} src={cover} /> : <></>}
        hoverable={true}
        bordered={false}
      >
        {/* {props.game.cover ? <img width={348} src={cover} /> : <></>} */}
        <Meta title={props.game.title} />
      </Card>
    </Col>
  )
}

export default GameCard
