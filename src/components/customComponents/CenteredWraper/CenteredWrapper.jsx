import React from 'react';
import useStyles from './useStyles.js'


const CenteredWrapper = ({ children }) => {
  const classes = useStyles();
    
  return (
    <div className={classes.root}>
      {children}
    </div>
    )
}

export default CenteredWrapper;