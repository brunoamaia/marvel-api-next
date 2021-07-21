import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Link from '../Link';

interface HeaderProps {
  isHomepage?: boolean
  subtitle: string
}


export default function Header({ isHomepage = false, subtitle }: HeaderProps) {
  return (
    <AppBar position="static" sx={{ boxShadow: 0, height: 80, py: 1 }} >
      <Toolbar>
        {isHomepage ? (
          <Typography
            align="center"
            variant="h3"
            component="h1"
            sx={{ flexGrow: 1, my: 'auto' }}
          >
            {subtitle}
          </Typography>
        ) : (
          <Box sx={{ mx: "auto", textAlign: 'center' }}>
            <Button
              variant="contained"
              component={Link}
              href="/"
              sx={{ backgroundColor: 'none', boxShadow: 0, mx: 'auto'}}
            >
              <Typography
                variant="h3"
                component="h1"
              >
                {subtitle}
              </Typography>
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}