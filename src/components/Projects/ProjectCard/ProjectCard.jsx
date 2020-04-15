import './ProjectCard.scss'
import React, {
  useState,
  useRef
}                        from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import Card              from '@material-ui/core/Card'
import CardActionArea    from '@material-ui/core/CardActionArea'
import CardActions       from '@material-ui/core/CardActions'
import CardContent       from '@material-ui/core/CardContent'
import Button            from '@material-ui/core/Button'
import Typography        from '@material-ui/core/Typography'
import Dialog            from '@material-ui/core/Dialog'
import DialogContent     from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle       from '@material-ui/core/DialogTitle'
import MoreHorizIcon     from '@material-ui/icons/MoreHoriz'
import {
  useStyles,
  theme
}                        from '../../theme'

const ProjectCard = props => {
  const [isOpen, setIsOpen] = useState(false)
  const descriptionElementRef = useRef(null)
  const { name, url, description } = props.item
  const classes = useStyles();

  const handleClickOpen = () => {
    setIsOpen(true)
  };

  const handleClose = () => {
    setIsOpen(false)
  };

  return (
    <ThemeProvider theme={ theme }>
      <Card className={ classes.root } boxshadow={ 5 }>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              { name }
            </Typography>

            <div className='d-flex justify-content-between'>
              <Typography variant="body2" color="textSecondary" component="p" noWrap>
                Project Description
              </Typography>

              <MoreHorizIcon onClick={ handleClickOpen } id='dialog-ellipsis' />
            </div>

            <Dialog
              open={ isOpen }
              onClose={ handleClose }
              scroll={ 'paper' }
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
            >
              <DialogTitle id="scroll-dialog-title">{ name }</DialogTitle>
              <DialogContent dividers>
                <DialogContentText
                  id="scroll-dialog-description"
                  ref={ descriptionElementRef }
                  tabIndex={ -1 }
                >
                  <Typography variant="body2" color="textSecondary" component="p">
                    { description }
                  </Typography>
                </DialogContentText>
              </DialogContent>
            </Dialog>

          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button size="small"
                  m='auto'
                  color="primary"
                  href={ `${ url }` }
                  variant='outlined'
                  fullWidth
                  className={ classes.btnOutline }
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}

export default ProjectCard