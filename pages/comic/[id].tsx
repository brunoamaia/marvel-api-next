import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import Box from '@material-ui/core/Box';

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
        title={`${comicsDetails.title} | ${comicsDetails.id}`}
      />
      <Box width="100%" sx={{ bgcolor: '#ebebeb' }} >
        <Header subtitle='COMIC: DETAILS' />
        <main>
          <ComicDetailsComponent />
        </main>
      </Box>
    </>
  )
}