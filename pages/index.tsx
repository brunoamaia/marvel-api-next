import { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import Head from '../src/components/Head';
import Header from '../src/components/Header';
import ListItemsOfHomePage from '../src/components/ListItemsOfHomePage';
import { getDataHomepage } from '../src/redux/middleware/apiActions/getComicsList';

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDataHomepage())
  }, [dispatch])

  return (
    <>
      <Head 
        description="Página com insformações sobre os heróis da marvel" 
        title="Marvel api**" 
      />
      <Header subtitle="MARVEL: COMICS" />
      <main>
        <ListItemsOfHomePage />
      </main>
    </>
  )
}
