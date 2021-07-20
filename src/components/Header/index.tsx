import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

interface HeaderProps {
  subtitle: string
}

export default function Header({ subtitle }: HeaderProps) {
  return (
    <AppBar position="static" sx={{ boxShadow: 0 }} >
      <Toolbar>
        <Typography
          align="center"
          variant="h3"
          component="h1"
          sx={{ flexGrow: 1 }}
        >
          {subtitle}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}