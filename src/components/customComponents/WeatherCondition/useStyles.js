import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    
    textContainer: {
      display: 'flex', 
      justifyContent: 'center', 
      padding: '10px'
    },
  
    current: { 
      paddingTop: "5px",
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: "Montserrat, sans-serif",
      textShadow: '1px 1px 1px lightblue',
      fontSize: '0.9rem',
      fontWeight: '700',
    },
  
  });

  export default useStyles;