import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'
import Layout from 'antd/es/layout/layout'
import { Row } from 'antd'
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
      <Row justify="center" className="h100" style={{ margin: '40px' }}>
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
