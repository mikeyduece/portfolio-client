import './ProjectCard.scss'
import React          from 'react';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
}                     from '@material-ui/core/styles';
import Card           from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions    from '@material-ui/core/CardActions';
import CardContent    from '@material-ui/core/CardContent';
import Button         from '@material-ui/core/Button';
import Typography     from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    margin: '0.5em'
  },
  leanMore: {
    '&:hover': {
      color: '#fff',
      backgroundColor: '#38495a'
    }
  }
})

const theme = createMuiTheme({
  palette: {
    primary: { main: '#38495a' }
  }
})

const ProjectCard = props => {
  const { name, url, description } = props.item
  const classes = useStyles();
  return (
    <ThemeProvider theme={ theme }>
      <Card className={ classes.root }>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              { name }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" noWrap>
              { description }
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small"
                  m='auto'
                  color="primary"
                  href={ `${ url }` }
                  variant='outlined'
                  fullWidth
                  borderRaduis='0'
                  className={classes.learnMore}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}

export default ProjectCard