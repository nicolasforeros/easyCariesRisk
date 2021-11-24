import { IUser } from '../common/types/types'

export interface IState {
  user: IUser | undefined
}

export const SET_USER = 'SET_USER'

export type IActionType =
  | { type: typeof SET_USER; user: IUser }
