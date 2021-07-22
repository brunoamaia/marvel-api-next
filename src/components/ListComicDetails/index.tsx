import { useSelector } from "react-redux"

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Text from './Text'
import Thumbnail from './Thumbnail'


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

  return (
    <Container maxWidth="lg" sx={{ mt: 2, py: 2 }}>
      <Grid
        container
        spacing={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}
        columns={{ xs: 4, sm: 5, md: 12, lg: 12, xl: 12 }}
      >
        {comicsDetails ? (
          <>
            <Grid item xs={4} sm={4} md={5} xl={4}>
              <Thumbnail url={comicsDetails.thumbnail} />
            </Grid>
            <Grid item xs={4} sm={5} md={7} xl={8}>
              <Text />
            </Grid>
          </>
        ) : (<Box height="500px" width="100%" />)
        }
      </Grid>
    </Container >
  )
}