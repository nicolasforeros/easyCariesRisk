import { IActionType, IState } from "."
import { SET_USER } from "./types"

export const appReducer = (
  state: IState,
  action: IActionType,
): IState => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      }

    default:
      return state
  }
}
