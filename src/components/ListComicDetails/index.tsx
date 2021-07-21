import { useEffect, useState } from "react";
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
      {comicsDetails ? (
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Thumbnail  url={comicsDetails.thumbnail} />
          </Grid>
          <Grid item xs={8}>
            <Text />
          </Grid>
        </Grid>
      ) : (<Box height="500px" width="100%" />)
      }
    </Container >
  )
}