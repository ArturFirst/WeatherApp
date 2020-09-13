import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      background: 'transparent'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
      fontSize: '1.1rem',
      color: '#8299bf'
    },
  
    wi: {
      color: '#8299bf',
      fontSize: "25px"
    },
  
   iconContainer: {
      display: 'flex',
      justifyContent: 'space-around', 
      paddingRight: '0'
   },
  
  degreesSpan: {
      marginLeft: '10px',  
      fontSize: '1.3rem', 
      color: '#8299bf'
   }
  
  }));

  export default useStyles;