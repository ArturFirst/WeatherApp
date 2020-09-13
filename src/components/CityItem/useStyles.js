import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: 545,
      minWidth: 350,
      border: '3px solid lightblue',
      background: 'linear-gradient(45deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
      boxShadow: '2px 2px 5px 5px rgba(0, 0, 0, 0.2)',
    },
  
    wi: {
      color: "#fff",
      fontSize: "55px", 
      textShadow: '2px 2px 3px grey'
    },
  
    mediaContainer: {
      display: 'flex', 
      justifyContent: 'space-around', 
      padding: '30px 15px 15px 15px',
    },
    
    spanStyle: {
      marginLeft: '5vw', 
      textShadow: '2px 2px 3px grey'
    },
  
    textContainer: {
      display: 'flex', 
      justifyContent: 'center', 
      padding: '15px'
    },
    
  });

  export default useStyles;