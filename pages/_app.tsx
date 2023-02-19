import 'styles/globals.scss'
import api from 'lib/api/index';
import {AppContext, initialState} from 'lib/context/app';
import { useState } from 'react';

export default function App({ Component, pageProps, store}) {
  const hookAppStore = useState(store);

  return (
    <AppContext.Provider value={hookAppStore}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}


App.getInitialProps = async () => {
  const {data} = await api.get("Portfolio.json");
  return {store: data};
}
