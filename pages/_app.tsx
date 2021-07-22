import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import store from '../src/redux/store'

import theme from '../src/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/fav.ico" />

        <title>MARVEL COMICS - saiba mais sobre os quadrinhos da Marvel.</title>
        <meta name="title" content="MARVEL COMICS - saiba mais sobre os quadrinhos da Marvel." />
        <meta name="description" content="Site criado utilizando os dados da api pública da Marvel. Foram utilizadas as seguintes tecnologias: axios, material-ui, next.js, redux ,typescript, entre outras." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marvel-comics-bruno.app" />
        <meta property="og:title" content="MARVEL COMICS - saiba mais sobre os quadrinhos da Marvel." />
        <meta property="og:description" content="Site criado utilizando os dados da api pública da Marvel. Foram utilizadas as seguintes tecnologias: axios, material-ui, next.js, redux ,typescript, entre outras." />
        <meta property="og:image" content="https://raw.githubusercontent.com/brunoamaia/marvel-api-next/main/public/metaimage.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://marvel-comics-bruno.app" />
        <meta property="twitter:title" content="MARVEL COMICS - saiba mais sobre os quadrinhos da Marvel." />
        <meta property="twitter:description" content="Site criado utilizando os dados da api pública da Marvel. Foram utilizadas as seguintes tecnologias: axios, material-ui, next.js, redux ,typescript, entre outras." />
        <meta property="twitter:image" content="https://raw.githubusercontent.com/brunoamaia/marvel-api-next/main/public/metaimage.png" />

      </Head>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
export default MyApp
