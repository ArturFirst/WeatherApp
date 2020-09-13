import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';

import WeatherCondition from '../../customComponents/WeatherCondition/WeatherCondition.jsx';
import weatherIcons from "../../icons.js";
import useStyles from './useStyles.js';


const AccordionItem = ({ data, idx, expanded, handleChange }) => {
 
  const classes = useStyles();

  const { dayOfWeek, 
          iconId, 
          maxTemp, 
          minTemp, 
          humidity, 
          wind 
        } = data;

  const icon = `wi wi-${weatherIcons[iconId].icon}`;

  return (
      <Accordion expanded={expanded === `panel${idx}`} onChange={handleChange(`panel${idx}`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{dayOfWeek}</Typography>
          <Container className={classes.iconContainer}>
            <CardMedia
                className={`${icon} ${classes.wi}`}
                src={icon}
            />
            <span className={classes.degreesSpan}>{maxTemp}°/ {minTemp}°</span>
          </Container>
        </AccordionSummary>
        <AccordionDetails style={{display: 'block', padding: "5px"}}>
            <WeatherCondition 
              humidity={humidity}
              wind={wind}
            />
        </AccordionDetails>
      </Accordion>
  );
}





const ControlledAccordions = (props) => {
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { data } = props

  return (
      <div className={classes.root}>
        {data.map((item, i) => <AccordionItem 
                                  key={i} 
                                  data={item} 
                                  idx={i} 
                                  expanded={expanded}
                                  handleChange={handleChange}
                                  />)}
      </div>
  );
}


export default ControlledAccordions;