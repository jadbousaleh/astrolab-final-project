import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    width: 250
  },
  media: {
    height: 100,
    width: 100,
    margin: "0 auto"
  },
  area: {
    textAlign: "center"
  },
  button: {
    textAlign: "center",
    margin: "0 auto"
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
        <div>

            <Card className={classes.root}>
                <CardActionArea className={classes.area}>
                    <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    
                    <Button className={classes.button} size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
                </Card>

        </div>
  );
}
