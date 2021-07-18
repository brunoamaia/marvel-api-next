import Head from 'next/head'
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';

import Link from '../src/components/Link';


export default function Home() {
  return (
    <Container maxWidth="xl">
      <Head>
        <title>Marvel api</title>
        <meta name="description" content="Página com insformações sobre os heróis da marvel" />
      </Head>
      <Box sx={{ flexGrow: 1 }}>

        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MENU
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-beta with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>

        <br />
        <Button variant="contained" component={Link} noLinkStyle href="/about">
          Go to the about page
        </Button>
      </Box>
    </Container>
  )
}
