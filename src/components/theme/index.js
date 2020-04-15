import {
  createMuiTheme,
  makeStyles
} from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: { main: '#38495a' }
  },
  spacing: 3
})

export const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 200,
    margin: '0.5em'
  },
  container: {
    display: 'flex'
  },
  paper: {
    margin: theme.spacing(1)
  },
  btnOutline: {
    '&:hover': {
      color: '#38495a',
      backgroundColor: '#F6AE2D',
      cursor: 'pointer'
    }
  },
  contactForm: {
    width: '100%'
  }
})