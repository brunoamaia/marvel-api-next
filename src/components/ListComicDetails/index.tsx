import { useSelector } from "react-redux"

interface creatorsProps {
  cover?: string,
  penciller?: string,
  writer: string,
}

type ReduxParams = {
  apiComicsDetails: {
    creators: creatorsProps,
    description: string,
    published: string,
    id: number,
    thumbnail: string,
    title: string,
  }
}

export default function ListComicDetails() {
  
  const comicsDetails = useSelector((state: ReduxParams) => state.apiComicsDetails)
  console.log(comicsDetails.title)
  return(
    <>
    </>
  )
}