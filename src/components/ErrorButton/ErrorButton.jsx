import React from 'react';

import Button from '@material-ui/core/Button';


const ErrorButton = ({ setError }) => {

  const errorHandle = () => setError(false)

  return (
    <Button 
      variant="contained" 
      color="secondary" 
      onClick={errorHandle}
      style={{margin: 100}}
    >
        Ошибка, попоробуем еще раз!
    </Button>
  );
}


export default ErrorButton;