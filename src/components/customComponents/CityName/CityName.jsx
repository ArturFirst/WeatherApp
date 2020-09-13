import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles.js';


const CityName = (props) => {

    const classes = useStyles()

    const { city } = props;

    return (
        <Typography 
            gutterBottom variant="h4" 
            component="h4" 
            align='center' 
            className={classes.cityName}
        >       
            {city}
        </Typography>)

}

export default CityName;