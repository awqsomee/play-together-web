import Login from '../pages/Login'
import Main from '../pages/Main'

export interface IRoute {
  path: string
  component: React.ComponentType
}

export enum RouteNames {
  MAIN = '/',
  WELCOME = '/welcome',
  LOGIN = '/login',
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
]

export const privateRoutes: IRoute[] = [
  {
    path: '/login',
    component: Login,
  },
]
