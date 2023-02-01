import React, {  useState } from "react"
import 'styles/globals.scss'

// import api from 'lib/api';
// import { AppContext } from 'lib/context/app'


export default function App({ Component, pageProps , initStore}) {
  // const [store, setStore] = useState(initStore);

  return (
    // <AppContext.Provider value={[store, setStore]}>
      <Component {...pageProps} /> 
    // </AppContext.Provider>
  )   
}

// App.getInitialProps  = async () => {
//   const store = await api.getStore();
//   return { initStore: store }
// }