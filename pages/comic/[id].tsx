import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import Head from '../../src/components/Head';
import Header from '../../src/components/Header';
import ComicDetailsComponent from '../../src/components/ListComicDetails';

import { getComicDetails } from "../../src/redux/middleware/apiActions/getComicDetails";
import { useDispatch, useSelector } from "react-redux";

type ReduxParams = {
  apiComicsDetails: {
    id: number,
    title: string,
  }
}

export default function ComicDetails() {
  const dispatch = useDispatch()
  const comicsDetails = useSelector((state: ReduxParams) => state.apiComicsDetails)

  const [roomId, setRoomId] = useState<string>('')

  const router = useRouter()
  const queryKey = 'id'
  const queryValue = router.query[queryKey] as string


  useEffect(() => {
    setRoomId(queryValue)
    dispatch(getComicDetails(roomId))
  }, [dispatch, queryValue, roomId])

  return (
    <>
      <Head
        description="Página com insformações sobre os heróis da marvel"
        title={`${comicsDetails.title} | ${comicsDetails.id}`}
      />
      <Header subtitle='COMIC: DETAILS' />
      <ComicDetailsComponent />
    </>
  )
}