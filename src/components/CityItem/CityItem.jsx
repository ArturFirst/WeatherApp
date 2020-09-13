import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import WeatherCondition from '../customComponents/WeatherCondition/WeatherCondition.jsx';
import CityName from '../customComponents/CityName/CityName.jsx'

import weatherIcons from "../icons.js";
import useStyles from './useStyles.js';




const CityItem = (props) => {
  
  const classes = useStyles();

  const { onOpen, 
          data, 
          setCity 
        } = props;

  const { cityName, 
          iconId, 
          currTemp, 
          humidity, 
          wind 
        } = data;

  const icon = `wi wi-${weatherIcons[iconId].icon}`;

  const handleOpen = () => {
    onOpen(true);
    setCity(cityName);
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Container className={classes.mediaContainer}>
          <CardMedia
            className={`${icon} ${classes.wi}`}
            src={icon}
          >
            <span className={classes.spanStyle}>
              {currTemp}°C
            </span>
          </CardMedia>
        </Container>
        <CardContent>
          <CityName city={cityName} />
          <WeatherCondition
            humidity={humidity} 
            wind={wind}
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Container className={classes.textContainer}>
          <Button 
            variant="outlined" 
            color="default" 
            onClick={handleOpen}
          >
              ПОДРОБНЕЕ
          </Button>
        </Container>
      </CardActions>
    </Card>
  );
}

export default CityItem;