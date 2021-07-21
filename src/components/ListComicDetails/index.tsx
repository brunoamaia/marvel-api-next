import { useSelector } from "react-redux"

interface creatorsProps {
  colorist?: Array<string>,
  cover?: Array<string>,
  editor?: Array<string>,
  inker?: Array<string>,
  letterer?: Array<string>,
  penciller?: Array<string>,
  writer?: Array<string>,
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