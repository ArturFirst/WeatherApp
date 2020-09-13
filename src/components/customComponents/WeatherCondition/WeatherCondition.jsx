import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './useStyles.js'


const WeatherCondition = (props) => {

    const { humidity, wind } = props;

    const classes = useStyles()

return (

    <Typography
        variant="subtitle2"
        className={classes.current}
        color="textSecondary"
        gutterBottom
        >
            <Container className={classes.textContainer}>
                <span>
                  Ветер: {wind}
                </span>
              </Container>
              <Container className={classes.textContainer}>
                <span>
                  Влажность: {humidity}
                </span>
              </Container>
    </Typography>
)

}

export default WeatherCondition;