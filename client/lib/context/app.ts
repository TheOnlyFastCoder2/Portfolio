import React, {createContext} from "react";

import IStore from 'lib/api/IStore';

export const initialState: IStore  = {
  projects: []
}

export type TAppContext = [IStore, React.Dispatch<IStore>];
export const AppContext = createContext<TAppContext>([initialState, () => {}])

