import Acc from '../pages/Acc'
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
]
