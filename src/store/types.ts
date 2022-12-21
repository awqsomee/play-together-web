export interface UserState {
  auth: boolean
}

export enum UserActionsEnum {
  SET_USER = 'SET_USER',
}

export interface SetUserAction {
  type: UserActionsEnum.SET_USER
  payload: boolean
}

export type UserAction = SetUserAction
