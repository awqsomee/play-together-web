import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'
import Layout from 'antd/es/layout/layout'
import { Card, Col, Row } from 'antd'
import { localhost } from '../store/serverAdress'
import PlayerCard from '../components/PlayerCard'
import { IPlayer } from '../models/IPlayer'

const Players: FC = () => {
  const [players, setPlayers] = useState<IPlayer[]>([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    fetchPlayers()
  }, [])

  const fetchPlayers = async () => {
    const players = await axios.get(`${localhost}/users?title=${query}`)
    setPlayers(players.data)
  }

  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <div className="site-card-wrapper w75">
          <Row gutter={[16, 24]}>
            {players.map((player) => (
              <PlayerCard key={player.username} player={player} />
            ))}
          </Row>
        </div>
      </Row>
    </Layout>
  )
}

export default Players
