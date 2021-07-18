import Head from 'next/head'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Link from '../src/components/Link';


export default function Home() {
  return (
    <Container maxWidth="sm">
      <Head>
        <title>Marvel api | About</title>
        <meta name="description" content="Página com insformações sobre os heróis da marvel" />
      </Head>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-beta with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
      </Box>
    </Container>
  )
}
