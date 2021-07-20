import Head from '../src/components/Head';
import Header from '../src/components/Header';
import ListItemsOfHomePage from '../src/components/ListItemsOfHomePage';

export default function Home() {
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
