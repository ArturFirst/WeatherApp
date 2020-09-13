import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  
    appBar: {
      backgroundColor: '#9685c7', 
      boxShadow: '2px 2px 2px 2px rgba(0,0,0,0.2)', 
      position: 'fixed'
    },
  
    title: {
      flexGrow: 1,
      marginLeft: theme.spacing(4),
      textShadow: '2px 2px 3px grey'
    },
  }));

  export default useStyles;