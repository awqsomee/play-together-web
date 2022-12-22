import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'
import Layout from 'antd/es/layout/layout'
import { Card, Col, Row } from 'antd'
import { localhost } from '../store/serverAdress'
import PlayerCard from '../components/PlayerCard'
import { IPlayer } from '../models/IPlayer'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../store/hooks'
import { setPlayers } from '../store/players/players'

const Players: FC = () => {
  const dispatch = useDispatch()
  // const { isAuth, user } = useAppSelector((state) => state.playersToolkit)
  const { players } = useAppSelector((state) => state.playersToolkit)

  // const [players, setPlayers] = useState<IPlayer[]>([])
  // const [query, setQuery] = useState('')

  useEffect(() => {
    fetchPlayers()
  }, [])

  const fetchPlayers = async () => {
    const { data } = await axios.get(`${localhost}/api/users`)
    dispatch(setPlayers(data))
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
