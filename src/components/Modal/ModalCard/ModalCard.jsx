import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Accordion from '../Accordion/Accordion.jsx';
import CityName from '../../customComponents/CityName/CityName.jsx';

import useStyles from './useStyles.js';


const ModalCard = (props) => {
  
  const { onClose, 
          data 
        } = props;

  const { cityName } = data[0];

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
            <CityName city={cityName}/>
            <Typography
              variant="subtitle2"
              gutterBottom
            >
                <Container className={classes.container}>
                    <span className={classes.spanStyle}>
                        Погода на ближайщие дни
                    </span>
                </Container>
            </Typography>
            <Accordion data={data} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Container className={classes.container}>
            <Button 
              variant="outlined" 
              color="default" 
              onClick={onClose}>
                ЗАКРЫТЬ
            </Button>
        </Container>
      </CardActions>
    </Card>
  );
}

export default ModalCard;