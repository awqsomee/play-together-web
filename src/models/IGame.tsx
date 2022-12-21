import { IPlayer } from './IPlayer'

export interface IGame {
  title: string
  description: string
  cover: string
  releaseDate: Date
  users: IPlayer[]
  seekers: IPlayer[]
}
