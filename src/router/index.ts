import Acc from '../pages/Acc'
import Game from '../pages/Game'
import Games from '../pages/Games'
import Login from '../pages/Login'
import Main from '../pages/Main'
import Player from '../pages/Player'
import Players from '../pages/Players'
import Registration from '../pages/Registration'

export interface IRoute {
  path: string
  component: React.ComponentType
}

export enum RouteNames {
  MAIN = '/',
  WELCOME = '/welcome',
  LOGIN = '/login',
  REGISTRATION = '/reg',
  PLAYERS = '/players',
  PLAYER = '/:user',
  GAMES = '/games',
  GAME = '/:title',
  ACC = '/acc',
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.MAIN,
    component: Games,
  },
  {
    path: RouteNames.WELCOME,
    component: Games,
  },
  {
    path: RouteNames.LOGIN,
    component: Login,
  },
  {
    path: RouteNames.REGISTRATION,
    component: Registration,
  },
  {
    path: RouteNames.PLAYERS,
    component: Players,
  },
  {
    path: RouteNames.PLAYERS + RouteNames.PLAYER,
    component: Player,
  },
  {
    path: RouteNames.GAMES,
    component: Games,
  },
  {
    path: RouteNames.GAMES + RouteNames.GAME,
    component: Game,
  },
]

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.MAIN,
    component: Games,
  },
  {
    path: RouteNames.WELCOME,
    component: Games,
  },
  {
    path: RouteNames.PLAYERS,
    component: Players,
  },
  {
    path: RouteNames.PLAYERS + RouteNames.PLAYER,
    component: Player,
  },
  {
    path: RouteNames.GAMES,
    component: Games,
  },
  {
    path: RouteNames.GAMES + RouteNames.GAME,
    component: Game,
  },
  {
    path: RouteNames.ACC,
    component: Acc,
  },
]
