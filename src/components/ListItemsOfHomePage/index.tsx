import { useEffect, useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import api from '../../services/api';
import md5 from "md5"

interface resultsProps {
  description: string,
  id: number,
  thumbnail: {
    path: string,
    extension: string
  }
  title: string,
}

interface ComicsListDataProps {
  data: {
    data: {
      results: Array<resultsProps>
    }
  }
}

interface responseProps {
  description: string,
  id: number,
  title: string,
  thumbnail: string
}

export default function ListItemsOfHomePage() {
  const [comicsList, setComicsList] = useState<responseProps[]>()
  const [haveItems, setHaveItems] = useState(false);

  useEffect(() => {
    const marvelApi = {
      privateKey: process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY,
      publicKey: process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY,
      ts: 25 //Date.now()
    }

    const hash = md5(String(marvelApi.ts) + marvelApi.privateKey + marvelApi.publicKey)
    const url = `
    v1/public/comics
    ?ts=${marvelApi.ts}
    &apikey=${marvelApi.publicKey}
    &hash=${hash}
    `

    api
      .get(`${url.split(' ').join('')}`)
      .then((response: ComicsListDataProps) => {
        const newData = []
        for (let i = 0; i < response.data.data.results.length; i++) {
          let thumbnailURL = `${response.data.data.results[i].thumbnail.path}`
            + '.' +
            `${response.data.data.results[i].thumbnail.extension}`

          newData[i] = {
            id: response.data.data.results[i].id,
            description: response.data.data.results[i].description,
            title: response.data.data.results[i].title,
            thumbnail: thumbnailURL,
          }
        }

        setComicsList(newData)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <Container maxWidth="xl" sx={{ mt: 5 }}>
      <Grid container spacing={3}>
        {comicsList && comicsList?.map((comic) => (
          <Grid
            item key={comic.id}
            xs={12} sm={6} md={3}
          >
            <Card
              sx={{ display: 'flex' }}
            >
              <CardMedia
                sx={{
                  height: '280px',
                  width: '50%'
                }}
                image={comic.thumbnail}
                title="Image title"
              />
              <CardContent
                sx={{ width: '50%', display: 'flex', flexDirection: 'column' }}
              >
                <Typography
                  gutterBottom variant="h6"
                  component="h2"
                  sx={{ overflow: "hidden", textOverflow: "ellipsis", maxHeight: "70px" }}
                >
                  {comic.title}
                </Typography>
                <Typography noWrap sx={{ flexGrow: 1 }} >
                  {comic.description}
                </Typography>
                <Button variant="contained" size="small">View more...</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )

}