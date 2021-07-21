import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import Head from '../../src/components/Head';
import Header from '../../src/components/Header';
import ComicDetailsComponent from '../../src/components/ListComicDetails';

import { getComicDetails } from "../../src/redux/middleware/apiActions/getComicDetails";
import { useDispatch } from "react-redux";



export default function ComicDetails() {
  const dispatch = useDispatch()
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
        title={`Marvel api | ${roomId}`}
      />
      <Header subtitle={roomId} />
      <ComicDetailsComponent />
    </>
  )
}