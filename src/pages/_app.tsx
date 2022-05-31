import '../styles/globals.css'
import AppLayout from '../components/layouts/AppLayout';
import DefaultLayout from '../components/layouts/Default';
import { AppProps } from 'next/app';

import { store, StoreContext } from "../stores/store"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>  
      <StoreContext.Provider value={store}>
          <DefaultLayout>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </DefaultLayout>
        </StoreContext.Provider>
    </>
  );
};

export default App;
