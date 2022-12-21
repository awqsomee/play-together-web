import React, { FC } from 'react'
import Layout from 'antd/es/layout/layout'
import { Col, Card } from 'antd'
import { IUser } from '../models/IUser'
import { IPlayer } from '../models/IPlayer'

interface IPlayerCard {
  player: IPlayer
}

const PlayerCard: FC<IPlayerCard> = (props: { player: IPlayer }) => {
  return (
    <Col className="gutter-row" span={6}>
      <Card title={props.player.username} bordered={false}>
        {props.player.searches.map((game) => game.title)}
      </Card>
    </Col>
  )
}

export default PlayerCard
