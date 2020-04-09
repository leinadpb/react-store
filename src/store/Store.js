import React, { useReducer } from 'react';
import AppInitialState from './appInitialState';
import AppReducer from './appReducer';

export const Store = React.createContext();

export const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, AppInitialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>
}