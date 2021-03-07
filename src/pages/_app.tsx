import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';

import '@/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
        <Component {...pageProps} />
    </Provider>
  );
}
