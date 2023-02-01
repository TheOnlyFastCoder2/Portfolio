import React, { createContext, useState } from "react";
import IStore from 'lib/api/IStore';

export const initialState: IStore  = {
  reviews: [],
  projects: []
}

export type TAppContext = [IStore, React.Dispatch<IStore>];
export const AppContext = createContext<TAppContext|undefined>(undefined)

