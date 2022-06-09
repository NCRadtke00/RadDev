import '../styles/globals.css'
import AppLayout from '../components/layouts/AppLayout';
import DefaultLayout from '../components/layouts/Default';
import { AppProps } from 'next/app';
import { SessionProvider as AuthProvider } from 'next-auth/react'
import { store, StoreContext } from "../stores/store"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider session={pageProps.session}>  
      <StoreContext.Provider value={store}>
          <DefaultLayout>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </DefaultLayout>
        </StoreContext.Provider>
    </AuthProvider>
  );
};

export default App;
