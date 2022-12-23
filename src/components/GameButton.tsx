import React, { FC, useState } from 'react'
import { Col, Card, Button, Typography } from 'antd'
import { IGame } from '../models/IGame'
import Meta from 'antd/es/card/Meta'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setSelectedGames } from '../store/games/games'

interface IGameButton {
  game: IGame
}

const GameButton: FC<IGameButton> = (props: IGameButton) => {
  // const [type, setType] = useState<'default' | 'link' | 'text' | 'ghost' | 'primary' | 'dashed' | undefined>('default')
  const dispatch = useAppDispatch()
  const { games, selectedGames } = useAppSelector((state) => state.gamesToolkit)
  const [isChecked, setIsChecked] = useState(selectedGames.includes(props.game.title) ? true : false)
  const [bgColor, setBgColor] = useState(isChecked ? '#7417a7' : '#FFF')

  return (
    <Card
      onClick={() => {
        if (isChecked) {
          setBgColor('#FFF')
          setIsChecked(false)
          dispatch(setSelectedGames(selectedGames.filter((title) => title != props.game.title)))
        } else {
          setBgColor('#7417a7')
          setIsChecked(true)
          dispatch(setSelectedGames([...selectedGames, props.game.title]))
        }
      }}
      // title={props.game.title}
      hoverable={true}
      bordered={false}
      color="white"
      style={{ background: bgColor, width: 'fit-content', margin: '0px 5px', height: '70px' }}
    >
      {/* {props.game.cover ? <img width={348} src={cover} /> : <></>} */}
      <Meta title={props.game.title} />
    </Card>
  )
}

export default GameButton
