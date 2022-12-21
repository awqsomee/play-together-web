import { IGame } from './IGame'

export interface IPlayer {
  username: string
  games: IGame[]
  searches: IGame[]
}
