import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'
import Layout from 'antd/es/layout/layout'
import { Row } from 'antd'
import { IGame } from '../models/IGame'
import { localhost } from '../store/serverAdress'
import GameCard from '../components/GameCard'

const Games: FC = () => {
  const [games, setGames] = useState<IGame[]>([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    fetchGames()
  }, [])

  const fetchGames = async () => {
    const games = await axios.get(`${localhost}/api/games/search?q=${query}`)
    setGames(games.data)
  }

  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <div className="site-card-wrapper w75">
          <Row gutter={[16, 24]}>
            {games.map((game) => (
              <GameCard key={game.title} game={game} />
            ))}
          </Row>
        </div>
      </Row>
    </Layout>
  )
}

export default Games
