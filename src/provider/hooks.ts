import { useContext } from 'react';
import { SET_USER } from './types';
import { DispatchContext } from './provider';
import { IUser } from '../common/types/types';

export const useActions = () => {
  const dispatch = useContext(DispatchContext);

  const setUser = (user: IUser) => {
    dispatch({
      type: SET_USER,
      user,
    });
  };

  return {
    setUser,
  };
};
