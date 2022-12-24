import React, { FC } from 'react'
import Layout from 'antd/es/layout/layout'
import { Col, Card } from 'antd'
import { IUser } from '../models/IUser'
import { IPlayer } from '../models/IPlayer'
import { useNavigate } from 'react-router-dom'
import { Typography } from 'antd'

const { Title } = Typography

interface IPlayerCard {
  player: IPlayer
}

const PlayerCard: FC<IPlayerCard> = (props: { player: IPlayer }) => {
  const navigate = useNavigate()
  return (
    <div style={{ margin: '20px 10px' }}>
      {props.player?.searches ? (
        <Card
          onClick={() => {
            navigate('/players/' + props.player.username)
          }}
          title={props.player.username}
          hoverable={true}
          bordered={false}
        >
          {props.player.searches.map((game) => (
            <div key={game.title}>{game.title}</div>
          ))}
        </Card>
      ) : (
        <Card
          onClick={() => {
            navigate('/players/' + props.player.username)
          }}
          hoverable={true}
          bordered={false}
        >
          <Title level={5}>{props.player.username}</Title>
        </Card>
      )}
    </div>
  )
}

export default PlayerCard
