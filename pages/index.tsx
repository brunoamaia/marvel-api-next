import { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import Box from '@material-ui/core/Box';

import Head from '../src/components/Head';
import Header from '../src/components/Header';
import ListItemsOfHomePage from '../src/components/ListItemsOfHomePage';
import { getDataHomepage } from '../src/redux/middleware/apiActions/getComicsList';

import { GetStaticProps } from 'next';
import api, { token } from '../src/services/api';

interface responseProps {
  description: string,
  id: number,
  title: string,
  thumbnail: string
}

interface staticGeneratorData {
  comicsList: Array<responseProps>
}
export default function Home({ comicsList }: staticGeneratorData) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDataHomepage())
  }, [dispatch])

  return (
    <>
      <Head
        description="Página com insformações sobre os heróis da marvel"
        title="Marvel Comics"
      />
      <Box width="100%" minHeight="100%" sx={{ bgcolor: '#ebebeb' }} >
        <Header subtitle="MARVEL: COMICS" isHomepage />
        <main>
          <ListItemsOfHomePage comicsList={comicsList} />
        </main>
      </Box>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const { data } = await api.get(`comics${token}`)

  const comicsList: Array<responseProps> = []
  for (let i = 0; i < data.data.results.length; i++) {
    let thumbnailURL = `${data.data.results[i].thumbnail.path}`
      + '.' +
      `${data.data.results[i].thumbnail.extension}`

    comicsList[i] = {
      id: data.data.results[i].id,
      description: data.data.results[i].description,
      title: data.data.results[i].title,
      thumbnail: thumbnailURL,
    }
  }

  return {
    props: {
      comicsList
    },
    revalidate: 60 * 60 * 24  // update every 24 hours 
  }

  // revalidate: tempo que a página irá se atualizar (em segundos)
}