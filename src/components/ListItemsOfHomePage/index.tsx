import { useSelector } from 'react-redux'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '../Link';

import api, { token } from '../../services/api';
import { GetStaticProps } from 'next';


interface responseProps {
  description: string,
  id: number,
  title: string,
  thumbnail: string
}

// type ReduxParams = {
//   apiComicsList: Array<responseProps>
// }

interface staticGeneratorData {
  comicsList: Array<responseProps>
}
export default function ListItemsOfHomePage({ comicsList }: staticGeneratorData) {
  // const comicsList = useSelector((state: ReduxParams) => state.apiComicsList)

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
                <Button
                  variant="contained"
                  component={Link}
                  noLinkStyle
                  href={`/comic/${comic.id}`}
                >
                  View more...
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )

}