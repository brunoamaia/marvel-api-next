import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import Box from '@material-ui/core/Box';

import Head from '../../src/components/Head';
import Header from '../../src/components/Header';
import ComicDetailsComponent from '../../src/components/ListComicDetails';

import { getComicDetails } from "../../src/redux/middleware/apiActions/getComicDetails";
import { useDispatch, useSelector } from "react-redux";

import { GetStaticPaths, GetStaticProps } from 'next'
import api, { token } from "../../src/services/api";

type ReduxParams = {
  apiComicsDetails: {
    id: number,
    title: string,
  }
}
interface creatorsProps {
  colorist?: Array<string>,
  cover?: Array<string>,
  editor?: Array<string>,
  inker?: Array<string>,
  letterer?: Array<string>,
  penciller?: Array<string>,
  writer?: Array<string>,
}

interface responseProps {
  creators?: creatorsProps,
  description: string,
  published: string,
  id: number,
  thumbnail: string,
  title: string,
}

type staticGeneratorData = {
  comicsDetails: {
    creators: creatorsProps,
    description: string,
    published: string,
    id: number,
    thumbnail: string,
    title: string,
  }
}
export default function ComicDetails({ comicsDetails }: staticGeneratorData) {
  const dispatch = useDispatch()
  // const comicsDetails = useSelector((state: ReduxParams) => state.apiComicsDetails)

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
      <Box width="100%" sx={{ bgcolor: '#ebebeb', minHeight: '100vh' }} >
        <Header subtitle='COMIC: DETAILS' />
        <main>
          <ComicDetailsComponent comicsDetails={comicsDetails} />
        </main>
      </Box>
    </>
  )
}

interface creatorsProps {
  colorist?: Array<string>,
  cover?: Array<string>,
  editor?: Array<string>,
  inker?: Array<string>,
  letterer?: Array<string>,
  penciller?: Array<string>,
  writer?: Array<string>,
}

interface responseProps {
  creators?: creatorsProps,
  description: string,
  published: string,
  id: number,
  thumbnail: string,
  title: string,
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { id: '183' } }, { params: { id: '291' } }, { params: { id: '323' } }, { params: { id: '331' } }, { params: { id: '376' } },
  { params: { id: '384' } }, { params: { id: '428' } }, { params: { id: '1003' } }, { params: { id: '1158' } }, { params: { id: '1220' } },
  { params: { id: '1308' } }, { params: { id: '1332' } }, { params: { id: '1689' } }, { params: { id: '1749' } }, { params: { id: '1886' } },
  { params: { id: '1994' } }, { params: { id: '3627' } }, { params: { id: '82965' } }, { params: { id: '82967' } }, { params: { id: '82970' } }
  ]

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {

  const { data } = await api.get(`comics/${context.params?.id}${token}`)

  const thumbnailURL = `${data.data.results[0].thumbnail.path}`
    + '.' +
    `${data.data.results[0].thumbnail.extension}`

  const creatorsArrow = data.data.results[0].creators.items
  let colorist = []
  let cover = []
  let editor = []
  let inker = []
  let letterer = []
  let penciller = []
  let writer = []
  for (let i = 0; i < creatorsArrow.length; i++) {
    if (creatorsArrow[i].role == 'penciller (cover)') {
      if (cover === []) {
        cover[0] = creatorsArrow[i].name;
      } else {
        cover.push(creatorsArrow[i].name)
      }

      if (penciller === []) {
        penciller[0] = creatorsArrow[i].name;
      } else {
        penciller.push(creatorsArrow[i].name)
      }

    } else if (creatorsArrow[i].role == 'colorist') {
      if (colorist === []) {
        colorist[0] = creatorsArrow[i].name;
      } else {
        colorist.push(creatorsArrow[i].name)
      }

    } else if (creatorsArrow[i].role == 'cover') {
      if (cover === []) {
        cover[0] = creatorsArrow[i].name;
      } else {
        cover.push(creatorsArrow[i].name)
      }

    } else if (creatorsArrow[i].role == 'editor') {
      if (editor === []) {
        editor[0] = creatorsArrow[i].name;
      } else {
        editor.push(creatorsArrow[i].name)
      }

    } else if (creatorsArrow[i].role == 'inker') {
      if (inker === []) {
        inker[0] = creatorsArrow[i].name;
      } else {
        inker.push(creatorsArrow[i].name)
      }

    } else if (creatorsArrow[i].role == 'letterer') {
      if (letterer === []) {
        letterer[0] = creatorsArrow[i].name;
      } else {
        letterer.push(creatorsArrow[i].name)
      }

    } else if (creatorsArrow[i].role == 'penciller' || creatorsArrow[i].role == 'penciler') {
      if (penciller === []) {
        penciller[0] = creatorsArrow[i].name;
      } else {
        penciller.push(creatorsArrow[i].name)
      }

    } else if (creatorsArrow[i].role == 'writer') {
      if (writer === []) {
        writer[0] = creatorsArrow[i].name;
      } else {
        writer.push(creatorsArrow[i].name)
      }

    } else {
      console.log(`sobrou: ${creatorsArrow[i].role}`);
    }
  }

  const comicsDetails: responseProps = {
    creators: {
      colorist: colorist,
      cover: cover,
      editor: editor,
      inker: inker,
      letterer: letterer,
      penciller: penciller,
      writer: writer,
    },
    id: data.data.results[0].id,
    description: data.data.results[0].description,
    published: data.data.results[0].dates[0].date,
    title: data.data.results[0].title,
    thumbnail: thumbnailURL,
  }

  return {
    props: {
      comicsDetails
    },
    revalidate: 60 * 60 * 24  // update every 24 hours 
  }

  // revalidate: tempo que a página irá se atualizar (em segundos)
}