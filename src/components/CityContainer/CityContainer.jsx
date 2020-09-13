import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';

import CityItem from '../CityItem/CityItem.jsx';
import Container from '../customComponents/CenteredWraper/CenteredWrapper.jsx';
import ModalScreen from '../Modal/ModalScreen/ModalScreen.jsx';
import ErrorButton from '../ErrorButton/ErrorButton.jsx';

import useStyles from './useStyles.js';
import weatherRequestService from '../../WeatherAPI/weatherRequesService/weatherRequestService.js';



const CityContainer = () => {
  
    const [error, setError] = useState(false);
  
    const [cityModal, setCity] = useState(null)

    const [openModal, setOpen] = useState(false);

    const [weatherData, setWeather] = useState([]);

    const request = async () => {
      try{
        const result = await weatherRequestService();
        setWeather(result)
      } catch {
        setError(true)
      }
    }

    useEffect(() => {
    
      request();
  
    }, [error])

    const classes = useStyles();
  
    if (error) return <ErrorButton setError={setError} />

    if (weatherData.length === 0) return null

    const modalData = weatherData.find((item) => item.current.cityName === cityModal)

    return (
      <>
      {(openModal) ? <ModalScreen 
                        open={openModal} 
                        setOpen={setOpen} 
                        setCity={setCity}
                        data={modalData} 
                    /> 
                  : null}
    
      <div className={classes.root}>
        <Grid 
          container 
          spacing={3} 
          className={classes.container}
        >
          {weatherData.map(({ current }, i) => (<Grid 
                                                  key={i} 
                                                  item 
                                                  xs={12} 
                                                  sm={12} 
                                                  md={6} 
                                                  lg={6} 
                                                  xl={3}
                                                >
                                                  <Container>    
                                                      <CityItem 
                                                        onOpen={setOpen} 
                                                        data={current} 
                                                        setCity={setCity}
                                                      />
                                                  </Container>    
                                                </Grid>))}
        </Grid>
      </div>
      </>
    );
}

export default CityContainer;



