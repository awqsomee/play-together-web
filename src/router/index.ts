import Acc from '../pages/Acc'
import Game from '../pages/Game'
import Games from '../pages/Games'
import Login from '../pages/Login'
import Main from '../pages/Main'
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
  GAMES = '/games',
  ACC = '/acc',
  GAME = '/games/:title',
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.MAIN,
    component: Main,
  },
  {
    path: RouteNames.WELCOME,
    component: Main,
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
    path: RouteNames.GAMES,
    component: Games,
  },
  {
    path: RouteNames.GAME,
    component: Game,
  },
]

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.MAIN,
    component: Main,
  },
  {
    path: RouteNames.WELCOME,
    component: Main,
  },
  {
    path: RouteNames.PLAYERS,
    component: Players,
  },
  {
    path: RouteNames.GAMES,
    component: Games,
  },
  {
    path: RouteNames.ACC,
    component: Acc,
  },
  {
    path: RouteNames.GAME,
    component: Game,
  },
]
