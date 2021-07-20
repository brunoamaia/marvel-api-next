import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Link from '../Link';


export default function ListItemsOfHomePage() {
  return (
    <Container maxWidth="xl" >
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-beta with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>

        <br />
        <Button variant="contained" color="secondary" component={Link} noLinkStyle href="/about">
          Go to the about page
        </Button>
      </Box>
    </Container>
  )

}