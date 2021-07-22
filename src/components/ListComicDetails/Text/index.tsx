import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Creators from './Creators'

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

interface staticGeneratorData {
  comicsDetails: {
    creators: creatorsProps,
    description: string,
    published: string,
    id: number,
    thumbnail: string,
    title: string,
  }
}
export default function Text({comicsDetails}: staticGeneratorData) {
  // const comicsDetails = useSelector((state: ReduxParams) => state.apiComicsDetails)

  const [publishedAt, setPublishedAt] = useState<string[]>([])

  useEffect(() => {
    if (comicsDetails.published) {
      const date = comicsDetails.published.split('T')
      const newDate = date[0].split('-')
      setPublishedAt(newDate)
    }
  }, [comicsDetails])

  return (
    <Box sx={{ px: 3 }}>
      <Typography variant="h4" component="h2" >
        {comicsDetails.title}
      </Typography>

      <Typography align='justify' variant="h5" component="h3" sx={{ py: 2 }}>
        {comicsDetails.description ?
          `${comicsDetails.description}` : 'Not has description.'
        }
      </Typography>

      {publishedAt !== [] && (
        <Typography
          variant="h6"
          component="h4"
          sx={{ flexGrow: 1 }}
        >
          Published: {publishedAt[1]}-{publishedAt[2]}-{publishedAt[0]}
        </Typography>
      )}
      <Typography variant="h6" component="h4" >
        Id of Comic: {comicsDetails.id}
      </Typography>
      <Creators team={comicsDetails.creators} />
    </Box>
  )
}