import { IGame } from './IGame'

export interface IPlayer {
  username: string
  description: string
  games: IGame[]
  searches: IGame[]
}
